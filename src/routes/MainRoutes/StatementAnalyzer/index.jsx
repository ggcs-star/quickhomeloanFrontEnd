import React, { useState, useEffect } from 'react';
import { 
  Upload, FileText, Loader2, Plus, Trash2, ZapOff, ArrowRight, Eye, CheckCircle,
  Home, Car, PiggyBank, Coins, Gem, Lock
} from 'lucide-react';
import axios from 'axios';

const StatementAnalyzer = () => {
  const [fileEntries, setFileEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentTypeSelection, setCurrentTypeSelection] = useState('PERSONAL');
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [showComplianceResult, setShowComplianceResult] = useState(false);
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);

  const loanOptions = [
    { type: 'HOME', label: 'Home Loan', icon: <Home size={16} /> },
    { type: 'TOPUP', label: 'Top-up', icon: <Plus size={16} /> },
    { type: 'CAR', label: 'Car Loan', icon: <Car size={16} /> },
    { type: 'PERSONAL', label: 'Personal Loan', icon: <PiggyBank size={16} /> },
    { type: 'GOLD', label: 'Gold Loan', icon: <Gem size={16} /> },
  ];

  // Check pro access on component mount
  useEffect(() => {
    checkProAccess();
    
    // Listen for subscription updates
    const handleSubscriptionUpdate = (event) => {
      if (event.detail?.isPro === true) {
        checkProAccess();
      }
    };
    
    window.addEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    
    return () => {
      window.removeEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    };
  }, []);

  const checkProAccess = async () => {
    setIsCheckingAccess(true);
    try {
      const token = localStorage.getItem("token");
      
      // Check local storage first
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      if (isProLocal) {
        setIsProUser(true);
        setIsCheckingAccess(false);
        return;
      }
      
      if (!token) {
        setIsProUser(false);
        setIsCheckingAccess(false);
        return;
      }
      
      // Verify with API
      const response = await axios.get(
        "https://backend.quickhomeloan.in/public/api/check-access",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.data && response.data.access === true) {
        setIsProUser(true);
        localStorage.setItem("is_pro_user", "true");
      } else {
        setIsProUser(false);
        localStorage.setItem("is_pro_user", "false");
      }
    } catch (error) {
      console.error("Error checking pro access:", error);
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      setIsProUser(isProLocal);
    } finally {
      setIsCheckingAccess(false);
    }
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    if (!isProUser && !isCheckingAccess) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      e.target.value = '';
      return;
    }
    
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newEntries = Array.from(files).map((file) => {
      const sizeInMB = (file.size / 1024 / 1024).toFixed(2);
      const fileId = `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      return {
        id: fileId,
        name: file.name,
        type: currentTypeSelection,
        size: sizeInMB,
        category: currentTypeSelection,
        fileObject: file,
        uploadDate: new Date().toLocaleDateString('en-GB')
      };
    });

    setFileEntries(prev => [...prev, ...newEntries]);
    
    // Select the first uploaded file if none is selected
    if (!selectedFileId && newEntries.length > 0) {
      setSelectedFileId(newEntries[0].id);
    }
    
    e.target.value = '';
  };

  // Get selected file
  const selectedFile = fileEntries.find(file => file.id === selectedFileId);

  // Handle file click
  const handleFileClick = (fileId) => {
    if (!isProUser && !isCheckingAccess) return;
    setSelectedFileId(fileId);
  };

  // Remove file
  const removeFile = (fileId, e) => {
    e.stopPropagation();
    setFileEntries(prev => prev.filter(file => file.id !== fileId));
    if (selectedFileId === fileId) {
      const remainingFiles = fileEntries.filter(file => file.id !== fileId);
      setSelectedFileId(remainingFiles.length > 0 ? remainingFiles[0].id : null);
    }
  };

  // Handle compliance audit
  const handleComplianceAudit = async () => {
    if (!isProUser && !isCheckingAccess) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    if (fileEntries.length === 0) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowComplianceResult(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter files by current category
  const filteredFiles = fileEntries.filter(file => file.type === currentTypeSelection);

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      HOME: 'text-blue-600 bg-blue-50',
      PERSONAL: 'text-purple-600 bg-purple-50',
      CAR: 'text-green-600 bg-green-50',
      TOPUP: 'text-orange-600 bg-orange-50',
      GOLD: 'text-yellow-600 bg-yellow-50',
    };
    return colors[category] || 'text-gray-600 bg-gray-50';
  };

  // Calculate total files across all categories
  const totalFiles = fileEntries.length;
  const hasFiles = totalFiles > 0;

  // Check if user can upload more files (max 3 for free, unlimited for pro)
  const canUploadMore = isProUser ? true : fileEntries.length < 3;

  // Upgrade banner component
  const UpgradeBanner = () => (
    <div className="mt-6 mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock size={20} className="text-indigo-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-indigo-900 mb-1">Unlock Full Statement Analysis</h4>
          <p className="text-[13px] text-indigo-800 mb-3">
            Pro users get unlimited file uploads, detailed compliance reports, and advanced audit features.
          </p>
          <div className="flex flex-wrap gap-3">
            <button 
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-[13px] font-semibold hover:bg-indigo-700 transition"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("openProModal"));
              }}
            >
              Upgrade to Pro
            </button>
            <div className="flex items-center gap-2 text-xs text-indigo-700">
              <CheckCircle size={12} />
              <span>Unlimited uploads</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-indigo-700">
              <CheckCircle size={12} />
              <span>Detailed audit reports</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Pro status indicator
  const ProStatusIndicator = () => (
    <div className={`border px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm ${
      isProUser 
        ? "bg-green-50 border-green-200" 
        : "bg-white border-gray-200"
    }`}>
      <FileText size={16} className={isProUser ? "text-green-700" : "text-gray-500"} />
      <span className={`text-[11px] font-semibold uppercase tracking-wider ${
        isProUser ? "text-green-700" : "text-gray-600"
      }`}>
        {isCheckingAccess ? "Checking..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Header Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Statement Analyzer</h1>
                <p className="text-gray-600 text-sm">
                  Audit your fragmented loan statements for a combined continuity analysis.
                </p>
              </div>
              <ProStatusIndicator />
            </div>
          </div>

          <div className="p-6">
            {/* Queue Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900">+ Statements +</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    Queue
                  </span>
                  {!isProUser && !isCheckingAccess && (
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      {fileEntries.length}/3 files
                    </span>
                  )}
                </div>
              </div>

              {/* Loan Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {loanOptions.map((opt) => {
                  const isActive = currentTypeSelection === opt.type;
                  const fileCount = fileEntries.filter(f => f.type === opt.type).length;
                  
                  return (
                    <button
                      key={opt.type}
                      onClick={() => setCurrentTypeSelection(opt.type)}
                      disabled={!isProUser && !isCheckingAccess && !hasFiles}
                      className={`px-4 py-2.5 rounded-lg border transition-all duration-200 flex items-center gap-2 ${
                        isActive 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      } ${(!isProUser && !isCheckingAccess && !hasFiles) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {opt.icon}
                      <span className="font-medium">{opt.label}</span>
                      {fileCount > 0 && (
                        <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                          isActive ? 'bg-blue-200 text-blue-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {fileCount}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Show upgrade banner for non-pro users */}
            {!isProUser && !isCheckingAccess && <UpgradeBanner />}

            {/* Upload Area */}
            <div className="mb-8">
              <div className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                isProUser || (!isProUser && canUploadMore)
                  ? 'border-gray-300 hover:border-blue-400 bg-gray-50'
                  : 'border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed'
              }`}>
                {(!isProUser && !canUploadMore) ? (
                  <>
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock size={24} className="text-gray-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-500 mb-2">
                      Upload limit reached
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Free plan allows up to 3 files. Upgrade to Pro for unlimited uploads.
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("openProModal"))}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition"
                    >
                      <Gem size={16} />
                      Upgrade to Pro
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="file"
                      multiple
                      accept="application/pdf,image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileSelect}
                      disabled={!isProUser && !canUploadMore}
                    />
                    
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      isProUser 
                        ? 'bg-gradient-to-br from-blue-100 to-blue-200'
                        : 'bg-gradient-to-br from-gray-100 to-gray-200'
                    }`}>
                      <Upload size={24} className={isProUser ? "text-blue-600" : "text-gray-500"} />
                    </div>
                    
                    <h3 className={`text-lg font-semibold mb-2 ${isProUser ? "text-gray-900" : "text-gray-600"}`}>
                      {isProUser ? "Click or drag statements here" : "Click or drag statements here (3 files max)"}
                    </h3>
                    
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1 px-4 py-1.5 bg-white border border-gray-300 rounded-full shadow-sm mt-2">
                      <span className="text-xs font-medium text-gray-600">CATEGORY:</span>
                      <span className="text-xs font-bold text-purple-600 uppercase">{currentTypeSelection}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Uploaded Files Section */}
            {filteredFiles.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Uploaded Files</h3>
                <div className="space-y-3">
                  {filteredFiles.map((file) => {
                    const isSelected = selectedFileId === file.id;
                    
                    return (
                      <div
                        key={file.id}
                        onClick={() => handleFileClick(file.id)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'border-purple-500 bg-purple-50 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            {/* File Icon */}
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText size={18} className="text-purple-600" />
                            </div>
                            
                            {/* File Info */}
                            <div>
                              <h4 className="font-medium text-gray-900">{file.name}</h4>
                              <div className="flex items-center gap-3 mt-1">
                                <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(file.category)}`}>
                                  {file.category}
                                </span>
                                <span className="text-xs text-gray-500">{file.size} MB</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Delete Button */}
                          <button
                            onClick={(e) => removeFile(file.id, e)}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete file"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        {/* Selection Indicator */}
                        {isSelected && isProUser && (
                          <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-gray-100">
                            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-purple-600">Selected for audit</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Selected File Display */}
            {selectedFile && isProUser && (
              <div className="mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText size={20} className="text-purple-600" />
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{selectedFile.name}</h4>
                        
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded uppercase">
                            {selectedFile.category}
                          </span>
                          <span className="text-gray-700 font-medium text-sm">
                            {selectedFile.size} MB
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        if (selectedFile.fileObject) {
                          const url = URL.createObjectURL(selectedFile.fileObject);
                          window.open(url, '_blank');
                        }
                      }}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Preview file"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Compliance Audit Button */}
            <button 
              disabled={fileEntries.length === 0 || loading || (!isProUser && !isCheckingAccess)}
              onClick={handleComplianceAudit}
              className={`w-full py-4 rounded-lg text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 ${
                fileEntries.length > 0 && !loading && (isProUser || isCheckingAccess)
                  ? 'bg-black text-white hover:bg-gray-900 cursor-pointer'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  PROCESSING...
                </>
              ) : (
                <>
                  {(!isProUser && !isCheckingAccess && fileEntries.length > 0) ? (
                    <>
                      <Lock size={18} />
                      UPGRADE TO PRO FOR AUDIT
                    </>
                  ) : (
                    "COMPLETE COMPLIANCE AUDIT"
                  )}
                </>
              )}
            </button>

            {/* Compliance Result */}
            {showComplianceResult && isProUser && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-600" />
                  <span className="font-medium text-green-800">Compliance audit completed successfully</span>
                </div>
              </div>
            )}

            {/* Upgrade prompt for audit result (if non-pro tried to see result) */}
            {showComplianceResult && !isProUser && !isCheckingAccess && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Lock size={18} className="text-yellow-600" />
                  <span className="font-medium text-yellow-800">Upgrade to Pro to view detailed audit results</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
          <div>Total files: {fileEntries.length}</div>
          <div>Current category: {currentTypeSelection}</div>
          {!isProUser && !isCheckingAccess && fileEntries.length > 0 && (
            <div className="flex items-center gap-1 text-orange-600">
              <ZapOff size={14} />
              <span>Free tier: {fileEntries.length}/3 files used</span>
            </div>
          )}
          {isProUser && (
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle size={14} />
              <span>Pro: Unlimited uploads</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatementAnalyzer;