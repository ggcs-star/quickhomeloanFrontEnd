import React, { useState, useEffect, useRef, useMemo } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { House, Crown, Star, CheckCircle } from "lucide-react";
import { FaAngleDown, FaAngleUp, FaAngleRight, FaChevronLeft } from "react-icons/fa";
import { PrimaryBtn } from "../../components/Button";
import { navMenu } from "../../db";
import logo from "../../assets/navbar/quick.svg";
import cibil from "../../assets/navbar/cibil.webp";
import axios from "axios";
import { toast } from "react-toastify";
import NavbarAuthActions from "./NavbarAuthActions";
import ProModal from "./ProModal";

const BASE_URL = "https://backend.quickhomeloan.in/public/api";

// Create axios instance with interceptors
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor to add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_email");
      localStorage.removeItem("user_name");
      localStorage.removeItem("is_pro_user");
      localStorage.removeItem("subscription_id");
      
      // Dispatch event to update UI
      window.dispatchEvent(new Event("authStateChanged"));
      
      toast.error("Session expired. Please login again.");
      
      // Redirect to login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Load Razorpay script dynamically
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function NavbarContent1(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [completionPercentage, setCompletionPercentage] = useState(23.4);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [isProUser, setIsProUser] = useState(false);
    const [isCheckingAccess, setIsCheckingAccess] = useState(true);

    const [showProModal, setShowProModal] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const profileDropdownRef = useRef(null);
    const profileButtonRef = useRef(null);

    const profileMenuItems = useMemo(() => [
        { label: "Profile", path: "/profile" },
        { label: "Subscription", path: "/subscription" },
        {
            label: "Communications",
            path: "/communications",
            badge: "2",
        },
        { label: "Book Appointment", path: "/appointments" },
        { label: "Support Hub", path: "/support" },
        { label: "Settings", path: "/settings" },
    ], []);

    useEffect(() => {
        if (!showProfileDropdown) return;

        const handleClickOutside = (event) => {
            if (
                profileDropdownRef.current &&
                !profileDropdownRef.current.contains(event.target) &&
                profileButtonRef.current &&
                !profileButtonRef.current.contains(event.target)
            ) {
                setShowProfileDropdown(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setShowProfileDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [showProfileDropdown]);

    // Mobile stack: array of panels, each { title: string, items: array }
    const [mobileStack, setMobileStack] = useState([]);

    // Function to check pro access - SAME LOGIC AS HOMEDASHBOARD
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
            
            // Verify with API using the check-access endpoint
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

    // Check authentication status on component mount
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            const authStatus = localStorage.getItem("isAuthenticated") === "true" && !!token;
            const email = localStorage.getItem("user_email") || "";
            const name = localStorage.getItem("user_name") || "";
            
            setIsAuthenticated(authStatus);
            setUserEmail(email);
            setUserName(name);

            // Fetch user completion percentage if authenticated
            if (authStatus && token) {
                fetchUserCompletion();
                // Check pro access
                await checkProAccess();
            }
        };

        // Listen for user profile updates
        const handleProfileUpdate = (e) => {
            const updatedUser = e.detail?.user;
            if (updatedUser) {
                if (updatedUser.full_name) {
                    setUserName(updatedUser.full_name);
                    localStorage.setItem("user_name", updatedUser.full_name);
                }
                if (updatedUser.email) {
                    setUserEmail(updatedUser.email);
                    localStorage.setItem("user_email", updatedUser.email);
                }
                if (updatedUser.id) {
                    localStorage.setItem("user_id", updatedUser.id.toString());
                }
            }
        };

        // Listen for auth state changes
        const handleAuthChange = async (e) => {
            await checkAuth();
            if (e.detail?.user) {
                const userData = e.detail.user;
                if (userData.full_name) {
                    setUserName(userData.full_name);
                }
                if (userData.email) {
                    setUserEmail(userData.email);
                }
            }
        };

        // Listen for subscription updates
        const handleSubscriptionUpdate = async (event) => {
            if (event.detail?.isPro === true) {
                // Check pro access again after subscription update
                await checkProAccess();
                toast.success("Pro features unlocked!");
            }
        };

        // Listen for open pro modal event
        const handleOpenProModal = () => {
            setShowProModal(true);
        };

        // Initial check
        checkAuth();

        // Load Razorpay script on component mount
        loadRazorpayScript();

        // Add event listeners
        window.addEventListener("authStateChanged", handleAuthChange);
        window.addEventListener("userProfileUpdated", handleProfileUpdate);
        window.addEventListener("storage", checkAuth);
        window.addEventListener("subscriptionUpdated", handleSubscriptionUpdate);
        window.addEventListener("openProModal", handleOpenProModal);

        return () => {
            window.removeEventListener("authStateChanged", handleAuthChange);
            window.removeEventListener("userProfileUpdated", handleProfileUpdate);
            window.removeEventListener("storage", checkAuth);
            window.removeEventListener("subscriptionUpdated", handleSubscriptionUpdate);
            window.removeEventListener("openProModal", handleOpenProModal);
        };
    }, []);

    // Handle subscription payment - FIXED to show full Razorpay UI
    const handleSubscriptionPayment = async () => {
        if (isProcessingPayment) return;
        
        setIsProcessingPayment(true);
        
        try {
            // Check if Razorpay is loaded
            if (!window.Razorpay) {
                const scriptLoaded = await loadRazorpayScript();
                if (!scriptLoaded) {
                    toast.error("Payment system failed to load. Please refresh the page.");
                    setIsProcessingPayment(false);
                    return;
                }
            }

            // Get auth token and validate
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("user_id");
            
            if (!token) {
                toast.error("Please login to subscribe");
                setShowProModal(false);
                navigate("/login");
                setIsProcessingPayment(false);
                return;
            }

            if (!userId) {
                toast.error("User information missing. Please logout and login again.");
                setIsProcessingPayment(false);
                return;
            }

            // Show loading toast
            toast.info("Creating subscription...");

            // Call the create-subscription API using our api instance
            const response = await api.post("/create-subscription", {
                user_id: parseInt(userId)
            });

            const { subscription_id, key } = response.data;

            if (!subscription_id || !key) {
                toast.error("Invalid subscription response");
                setIsProcessingPayment(false);
                return;
            }

            // Get user details
            const user_name = localStorage.getItem("user_name") || "";
            const user_email_final = localStorage.getItem("user_email") || "";
            const user_phone = localStorage.getItem("user_phone") || "9999999999";

            // Razorpay options - CONFIGURED TO SHOW FULL UI
            const options = {
                key: key,
                subscription_id: subscription_id,
                name: "Quick Home Loan",
                description: "Pro Yearly Subscription - ₹999",
                image: logo,
                // These fields ensure the full payment UI is shown
                amount: 99900, // Amount in paise (₹999)
                currency: "INR",
                // Add these to show full checkout UI
                prefill: {
                    name: user_name || "Customer",
                    email: user_email_final || "customer@example.com",
                    contact: user_phone
                },
                notes: {
                    subscription_type: "yearly",
                    amount: "999",
                    user_id: userId
                },
                theme: {
                    color: "#4C6FFF",
                    hide_topbar: false // Keep topbar visible for better UX
                },
                // Force show all payment methods in full UI
                method: {
                    upi: true,
                    card: true,
                    netbanking: true,
                    wallet: true,
                    emi: true,
                    paylater: true
                },
                // Configuration for full checkout UI
                config: {
                    display: {
                        language: "en",
                        blocks: {
                            upi: {
                                name: "UPI / QR",
                                instruments: [
                                    {
                                        method: "upi",
                                        flows: ["collect", "qr", "intent"]
                                    }
                                ]
                            },
                            card: {
                                name: "Card",
                                instruments: [
                                    {
                                        method: "card",
                                        issuers: ["visa", "mastercard", "rupay", "amex"]
                                    }
                                ]
                            },
                            netbanking: {
                                name: "Netbanking",
                                instruments: [
                                    {
                                        method: "netbanking"
                                    }
                                ]
                            },
                            wallet: {
                                name: "Wallet",
                                instruments: [
                                    {
                                        method: "wallet"
                                    }
                                ]
                            }
                        },
                        hide: []
                    }
                },
                // Show order summary
                display: {
                    hide: [], // Don't hide anything
                    language: "en",
                    currency: "INR"
                },
                handler: async function (response) {
                    console.log("Payment successful:", response);
                    
                    // Show verifying toast
                    const verifyingToast = toast.loading("Verifying your subscription...");
                    
                    // Verify subscription immediately
                    const verificationResult = await verifySubscription(response, subscription_id);
                    
                    if (verificationResult) {
                        toast.update(verifyingToast, {
                            render: "Subscription verified! Pro features activated.",
                            type: "success",
                            isLoading: false,
                            autoClose: 3000
                        });
                        
                        // Close modal after successful verification
                        setShowProModal(false);
                        
                        // Force immediate UI update
                        setIsProUser(true);
                        localStorage.setItem("is_pro_user", "true");
                        
                        // Dispatch event for other components
                        window.dispatchEvent(new CustomEvent("subscriptionUpdated", {
                            detail: { 
                                isPro: true,
                                subscription_id: subscription_id,
                                verified: true
                            }
                        }));
                    } else {
                        toast.update(verifyingToast, {
                            render: "Subscription verification failed. Please contact support.",
                            type: "error",
                            isLoading: false,
                            autoClose: 5000
                        });
                    }
                },
                modal: {
                    ondismiss: function() {
                        console.log("Payment modal closed");
                        setIsProcessingPayment(false);
                        toast.info("Payment cancelled");
                    },
                    // Ensure modal is large enough for full UI
                    backdropclose: true,
                    escape: true,
                    confirm_close: false,
                    animation: true
                }
            };

            const razorpay = new window.Razorpay(options);
            
            // Add event listeners for better UX
            razorpay.on('payment.failed', function (response) {
                console.error("Payment failed:", response);
                const error = response.error;
                toast.error(`Payment failed: ${error.description || "Please try again"}`);
                setIsProcessingPayment(false);
            });
            
            razorpay.on('payment.success', function (response) {
                console.log("Payment success event:", response);
            });
            
            razorpay.open();
            
        } catch (error) {
            console.error("Error creating subscription:", error);
            
            if (error.response?.status === 401) {
                toast.error("Session expired. Please login again.");
                setShowProModal(false);
                localStorage.removeItem("token");
                localStorage.removeItem("isAuthenticated");
                localStorage.removeItem("user_id");
                localStorage.removeItem("user_email");
                localStorage.removeItem("user_name");
                setIsAuthenticated(false);
                navigate("/login");
            } else if (error.response?.status === 422) {
                const errors = error.response.data.errors;
                if (errors) {
                    const errorMessages = Object.values(errors).flat();
                    toast.error(errorMessages[0] || "Validation error");
                } else {
                    toast.error(error.response.data.message || "Validation error");
                }
            } else if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else if (error.response?.data?.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error("Failed to initiate subscription. Please try again.");
            }
            
            setIsProcessingPayment(false);
        }
    };

    // Verify subscription after successful payment
    const verifySubscription = async (paymentResponse, subscription_id) => {
        try {
            const token = localStorage.getItem("token");
            
            if (!token) {
                toast.warning("Payment received but verification pending. Please contact support.");
                setIsProcessingPayment(false);
                return false;
            }
            
            // Call verification API
            const response = await api.post("/verify-subscription", {
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_subscription_id: subscription_id,
                razorpay_signature: paymentResponse.razorpay_signature
            });
            
            // Update local storage based on verification response
            if (response.data && response.data.success) {
                localStorage.setItem("is_pro_user", "true");
                if (response.data.subscription_id) {
                    localStorage.setItem("subscription_id", response.data.subscription_id);
                }
                
                // Update state immediately
                setIsProUser(true);
                
                // Refresh user completion data
                await fetchUserCompletion();
                
                return true;
            } else {
                return false;
            }
            
        } catch (error) {
            console.error("Subscription verification failed:", error);
            
            // Even if verification fails, try to check status after delay
            setTimeout(async () => {
                await checkProAccess();
            }, 3000);
            
            return false;
        } finally {
            setIsProcessingPayment(false);
        }
    };

    // Fetch user completion percentage
    const fetchUserCompletion = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const response = await api.get("/user/completion");

            if (response.data && response.data.completion_percentage) {
                setCompletionPercentage(response.data.completion_percentage);
            }
        } catch (error) {
            console.error("Error fetching completion percentage:", error);
        }
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to update user profile data
    const updateUserProfile = (updatedData) => {
        if (updatedData.full_name) {
            localStorage.setItem("user_name", updatedData.full_name);
            setUserName(updatedData.full_name);
        }
        if (updatedData.email) {
            localStorage.setItem("user_email", updatedData.email);
            setUserEmail(updatedData.email);
        }
        if (updatedData.id) {
            localStorage.setItem("user_id", updatedData.id.toString());
        }

        window.dispatchEvent(new CustomEvent("userProfileUpdated", {
            detail: { user: updatedData }
        }));

        toast.success("Profile updated successfully");
    };

    // Logout handler with API call
    const handleLogout = async () => {
        setIsLoggingOut(true);
        const token = localStorage.getItem("token");

        if (!token) {
            clearAuthData();
            setIsLoggingOut(false);
            return;
        }

        try {
            await api.post("/logout", {});
            toast.success("Logged out successfully");
        } catch (error) {
            console.error("Logout API error:", error);
            if (error.response?.status === 401) {
                toast.info("Session expired, logged out successfully");
            } else {
                toast.info("Logged out from local session");
            }
        } finally {
            clearAuthData();
            setIsLoggingOut(false);
        }
    };

    // Helper function to clear authentication data
    const clearAuthData = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_name");
        localStorage.removeItem("is_pro_user");
        localStorage.removeItem("subscription_id");

        window.dispatchEvent(new Event("authStateChanged"));

        setIsAuthenticated(false);
        setIsProUser(false);
        setUserEmail("");
        setUserName("");
        setCompletionPercentage(23.4);

        navigate("/");

        if (menuOpen) {
            setMenuOpen(false);
            setMobileStack([]);
        }
    };

    // Helpers for desktop mega menu behavior
    const handleMenuToggle = (name) => {
        setExpandedItem(expandedItem === name ? null : name);
    };

    const handleDropdownToggle = (index) => {
        if (activeMegaMenu === index) {
            setActiveMegaMenu(null);
            setMegaMenuOpen(false);
        } else {
            setActiveMegaMenu(index);
            if (navMenu[index]?.isMegaMenu) setMegaMenuOpen(true);
        }
    };

    const handleSubmenuClose = () => {
        setExpandedItem(null);
        setActiveMegaMenu(null);
        setMegaMenuOpen(false);
    };

    const handleMegaMenuEnter = (index) => {
        if (navMenu[index]?.isMegaMenu) {
            setMegaMenuOpen(true);
            setActiveMegaMenu(index);
        }
    };

    const handleMegaMenuLeave = () => {
        setActiveMegaMenu(null);
        setMegaMenuOpen(false);
    };

    const hasMegaMenu = (item) =>
        item.isMegaMenu && item.submenu && item.submenu.some((subItem) => subItem.submenu && subItem.submenu.length > 0);

    // Desktop mega menu renderer
    const renderHomeLoanMegaMenu = (item, index) => {
        const loanCategories = item.submenu;
        if (!loanCategories || loanCategories.length === 0) return null;
        const homeLoanCategory = loanCategories.find((sub) => sub.label === "Home Loan");
        if (!homeLoanCategory || !homeLoanCategory.submenu) return null;
        const homeLoanSubcategories = homeLoanCategory.submenu;

        const columnCount = 3;
        const itemsPerColumn = Math.ceil(homeLoanSubcategories.length / columnCount);
        const columns = [];
        for (let i = 0; i < columnCount; i++) {
            columns.push(homeLoanSubcategories.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
        }

        return (
            <div
                className="fixed left-1/2 transform -translate-x-1/2 top-28 min-h-[500px] min-w-[1200px] w-fit border-radius-0 border-b-5 border-solid border-b-black bg-white shadow-lg z-50 border border-neutral-300 border-t-0 rounded-b-lg overflow-y-auto"
                style={{
                    boxShadow: "-10px 10px 20px 0 rgba(30,30,30,.05)",
                    borderBottom: "5px solid black",
                    height: "500px",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#9CA3AF #F3F4F6",
                }}
                onMouseEnter={() => handleMegaMenuEnter(index)}
                onMouseLeave={handleMegaMenuLeave}
            >
                <div className="p-8 h-full">
                    <div className="flex h-full">
                        <div className="w-1/4 pr-6 border-r border-neutral-300 sticky top-0">
                            <ul className="space-y-2">
                                {loanCategories.map((loanCategory) => (
                                    <li key={loanCategory.id}>
                                        <Link
                                            to={loanCategory.slug}
                                            className="block text-sm font-medium bg-gray-100 text-gray-700 py-2 px-3 hover:bg-gray-200 hover:text-black rounded-md transition-colors duration-200"
                                            onClick={handleSubmenuClose}
                                        >
                                            {loanCategory.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-3/4 pl-6">
                            <div className="grid grid-cols-3 gap-8 h-full">
                                {columns.map((column, columnIndex) => (
                                    <div key={columnIndex} className="space-y-6">
                                        {column.map((subcategory) => (
                                            <div key={subcategory.id} className="mb-4">
                                                <div className="font-semibold text-sm text-black uppercase mb-3 border-b border-neutral-300 pb-2">
                                                    {subcategory.label}
                                                </div>
                                                <ul
                                                    className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
                                                    style={{
                                                        scrollbarWidth: "thin",
                                                        scrollbarColor: "#9CA3AF #F3F4F6",
                                                    }}
                                                >
                                                    {subcategory.submenu.map((subItem) => (
                                                        <li key={subItem.id}>
                                                            <Link
                                                                to={subItem.slug}
                                                                className="block text-sm text-gray-600 py-1 hover:text-black"
                                                                onClick={handleSubmenuClose}
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderRegularDropdown = (item, index) => {
        return (
            <div
                className="absolute top-28 left-0 bg-white shadow-lg z-50 border border-neutral-300 min-w-[200px] border-b-5 border-solid border-b-black border-t-0 rounded-b-lg"
                style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={() => setActiveMegaMenu(index)}
                onMouseLeave={() => setActiveMegaMenu(null)}
            >
                <div className="py-2">
                    {item.submenu.map((subItem) => (
                        <Link
                            key={subItem.id}
                            to={subItem.slug}
                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                            onClick={handleSubmenuClose}
                        >
                            {subItem.label}
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    // Mobile sliding panel helpers
    const openMobileRoot = () => {
        setMobileStack([
            {
                title: "Menu",
                items: navMenu,
            },
        ]);
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setMobileStack([]);
    };

    const pushMobilePanel = (title, items) => {
        setMobileStack((prev) => [...prev, { title, items }]);
    };

    const popMobilePanel = () => {
        setMobileStack((prev) => {
            if (prev.length <= 1) return prev;
            return prev.slice(0, -1);
        });
    };

    const hasSubmenu = (node) => Array.isArray(node.submenu) && node.submenu.length > 0;

    const handleMobileItemClick = (node) => {
        if (hasSubmenu(node)) {
            requestAnimationFrame(() => {
                pushMobilePanel(node.label, node.submenu);
            });
        } else if (node.slug) {
            navigate(node.slug);
            closeMobileMenu();
        } else {
            closeMobileMenu();
        }
    };

    const activePanelIndex = mobileStack.length - 1;

    const renderMobilePanels = () => {
        if (!mobileStack || mobileStack.length === 0) return null;

        return (
            <div className="relative h-full w-full overflow-hidden">
                {mobileStack.map((panel, idx) => {
                    const offset = (activePanelIndex - idx) * 100;

                    return (
                        <div
                            key={idx}
                            className="absolute top-0 left-0 h-full w-full bg-white shadow-xl overflow-y-auto"
                            style={{
                                transform: `translateX(${offset}%)`,
                                transition: "transform 350ms cubic-bezier(0.25, 0.8, 0.25, 1)",
                            }}
                        >
                            <div className="flex items-center gap-3 px-4 py-3 border-b sticky top-0 bg-white z-50">
                                {idx > 0 ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            popMobilePanel();
                                        }}
                                        className="p-2"
                                    >
                                        <FaChevronLeft size={18} />
                                    </button>
                                ) : (
                                    <div />
                                )}

                                <div className="text-lg font-semibold">{panel.title}</div>

                                <button
                                    onClick={closeMobileMenu}
                                    className="ml-auto p-2"
                                >
                                    <IoMdClose size={20} />
                                </button>
                            </div>

                            <div className="p-4">
                                {panel.items.map((node) => (
                                    <div key={node.id} className="border-b">
                                        <div
                                            className="flex items-center justify-between py-4 cursor-pointer"
                                            onClick={() => handleMobileItemClick(node)}
                                        >
                                            <div className="text-gray-900 text-[16px]">{node.label}</div>
                                            <div
                                                className="p-2 -mr-2"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleMobileItemClick(node);
                                                }}
                                            >
                                                {hasSubmenu(node) ? (
                                                    <FaAngleRight className="text-gray-500" />
                                                ) : (
                                                    <FaAngleRight className="text-gray-300" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="px-4 py-5 bg-white flex gap-3">
                                {isAuthenticated ? (
                                    <>
                                        <div className="flex-1 flex items-center justify-center text-sm text-gray-600">
                                            {userName ? `Hi, ${userName}` : (userEmail ? `Hi, ${userEmail.split('@')[0]}` : 'Welcome')}
                                        </div>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                closeMobileMenu();
                                            }}
                                            disabled={isLoggingOut}
                                            className={`cursor-pointer flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold transition ${isLoggingOut ? 'opacity-70' : 'hover:bg-red-700'}`}
                                        >
                                            {isLoggingOut ? 'Logging out...' : 'Logout'}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => {
                                                navigate("/login");
                                                closeMobileMenu();
                                            }}
                                            className="cursor-pointer flex-1 py-3 border border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-900 hover:text-white transition"
                                        >
                                            Login
                                        </button>
                                        <button
                                            onClick={() => {
                                                navigate("/signup");
                                                closeMobileMenu();
                                            }}
                                            className="cursor-pointer flex-1 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-black transition"
                                        >
                                            Sign Up
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    // Determine which navbar to show
    const isDashboardRoute = location.pathname === '/dashboard';
    const isAuthenticatedNotOnDashboard = isAuthenticated && !isDashboardRoute;

    return (
        <header className="">
            {isAuthenticated ? (
                // Dashboard Navbar
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-50">
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden p-2 hover:bg-slate-100 rounded"
                            onClick={() => {
                                const willOpen = !menuOpen;
                                setMenuOpen(willOpen);
                                if (willOpen) openMobileRoot();
                                else closeMobileMenu();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true">
                                <path d="M4 5h16"></path>
                                <path d="M4 12h16"></path>
                                <path d="M4 19h16"></path>
                            </svg>
                        </button>
                        <Link to="/" className="flex items-center relative z-10">
                            <img src={logo} alt="Quick Home Loan Logo" className="h-10 w-48 object-cover rounded-md" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-6 pr-6 border-r border-slate-100">
                            <div className="flex flex-col items-end">
                                <span className="text-[12px] font-semibold text-black uppercase tracking-wider mb-0.5">Compliance Status</span>
                                <span className="text-[12px] font-bold text-status-warning uppercase tracking-widest px-2 py-0.5 bg-orange-50 border border-status-warning/20 rounded">Incomplete</span>
                            </div>
                            <div className="flex flex-col items-end min-w-[140px]">
                                <div className="flex justify-between w-full mb-1">
                                    <span className="text-[12px] font-semibold text-black uppercase tracking-wider">Completion</span>
                                    <span className="text-[12px] font-bold text-status-safe tabular-nums">{completionPercentage.toFixed(1)}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-green-500 transition-all duration-1000"
                                        style={{ width: `${completionPercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Pro Button - Changes based on subscription status */}
                            {isCheckingAccess ? (
                                <button
                                    className="cursor-pointer bg-gray-400 text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold tracking-wide flex items-center gap-2"
                                    disabled
                                >
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    Verifying...
                                </button>
                            ) : isProUser ? (
                                <button
                                    className="cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold tracking-wide flex items-center gap-2 shadow-sm"
                                    onClick={() => navigate("/subscription")}
                                >
                                    <Crown size={16} className="text-yellow-300" />
                                    Pro Active
                                </button>
                            ) : (
                                <button
                                    className="cursor-pointer bg-gradient-to-r from-[#4C6FFF] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-sm flex items-center gap-2"
                                    onClick={() => setShowProModal(true)}
                                >
                                    <Star size={16} />
                                    Get Pro
                                </button>
                            )}

                            {showProModal && (
                                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
                                    <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl relative">
                                        <button
                                            onClick={() => setShowProModal(false)}
                                            className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
                                        >
                                            ✕
                                        </button>

                                        <div className="p-5">
                                            <div className="text-center mb-5">
                                                <div className="flex items-baseline justify-center gap-1 mb-2">
                                                    <span className="text-3xl font-bold text-gray-900">₹999</span>
                                                    <span className="text-gray-500 text-sm">/year</span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    Everything you need to grow your social media presence
                                                </p>
                                            </div>

                                            <div className="space-y-3 mb-6">
                                                {[
                                                    "Unlimited Projects & Links",
                                                    "10 Social Accounts",
                                                    "Advanced Analytics",
                                                    "Priority Support",
                                                    "Team Collaboration",
                                                    "Custom URL Shortener",
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center">
                                                        <span className="text-indigo-500 mr-3">✔</span>
                                                        <span className="text-sm text-gray-700">{item}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100 text-center">
                                                <p className="text-sm text-gray-600">Yearly subscription</p>
                                                <div className="flex justify-center gap-2 mt-1">
                                                    <span className="text-2xl font-bold text-gray-900">₹999</span>
                                                    <span className="text-gray-500">/year</span>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    Billed yearly, cancel anytime
                                                </p>
                                            </div>

                                            <button
                                                className={`w-full py-3.5 bg-gradient-to-r from-[#4C6FFF] to-[#8B5CF6] 
                                                text-white font-bold rounded-lg hover:shadow-lg transition-all text-sm mb-3
                                                ${isProcessingPayment ? 'opacity-70 cursor-not-allowed' : ''}`}
                                                onClick={handleSubscriptionPayment}
                                                disabled={isProcessingPayment}
                                            >
                                                {isProcessingPayment ? 'Processing...' : 'Subscribe at ₹999/year'}
                                            </button>

                                            <p className="text-center text-xs text-gray-500">
                                                🔒 Secure SSL encrypted payment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <button
                                className="cursor-pointer bg-brand-action text-black px-6 py-2.5 rounded-lg text-[14px] font-semibold tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
                                onClick={() => navigate("/dashboard")}
                            >
                                Go to Dashboard
                            </button>

                            <div className="relative">
                                <button
                                    ref={profileButtonRef}
                                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors border border-gray-200 focus-visible:ring-2 focus-visible:ring-brand-action/40 focus:outline-none"
                                    onClick={() => setShowProfileDropdown((prev) => !prev)}
                                    title={userName || userEmail || "Profile"}
                                >
                                    {userName ? (
                                        <span className="text-sm font-semibold text-gray-700 uppercase">
                                            {userName.charAt(0)}
                                        </span>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-gray-600"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    )}
                                </button>

                                {showProfileDropdown && (
                                    <div
                                        ref={profileDropdownRef}
                                        className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 p-2 z-50"
                                    >
                                        <div className="px-3 py-2 border-b border-gray-100">
                                            <p className="text-sm font-semibold text-gray-900">
                                                {userName || (userEmail ? userEmail.split("@")[0] : "Welcome")}
                                            </p>
                                            {userEmail && (
                                                <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                                            )}
                                            {isProUser && (
                                                <div className="mt-1">
                                                    <span className="text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                                                        <Crown size={10} />
                                                        Pro Member
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <ul className="py-1">
                                            {profileMenuItems.map((item) => (
                                                <li key={item.label}>
                                                    <button
                                                        onClick={() => {
                                                            navigate(item.path);
                                                            setShowProfileDropdown(false);
                                                        }}
                                                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition"
                                                    >
                                                        <span>{item.label}</span>
                                                        {item.badge && (
                                                            <span className="ml-3 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-100 px-1.5 text-xs font-semibold text-red-700">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setShowProfileDropdown(false);
                                            }}
                                            disabled={isLoggingOut}
                                            className="w-full mt-1 flex items-center justify-center px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition disabled:opacity-70"
                                        >
                                            {isLoggingOut ? "Logging out..." : "Logout"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {menuOpen && (
                        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => closeMobileMenu()}>
                            <div className="absolute right-0 top-0 h-full w-[100vw] max-w-[430px] bg-white shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                <div className="relative h-full">
                                    {renderMobilePanels()}
                                </div>
                            </div>
                        </div>
                    )}
                </header>
            ) : (
                // Public Navbar
                <div
                    style={{ zIndex: 50 }}
                    className={`w-full z-50 ${isScrolled ? "fixed top-0 bg-white border-b border-gray-200 shadow-md" : "absolute top-0 bg-white border-b-0"}`}
                >
                    <div className="gap-4 sm:px-5 relative flex justify-between border-gray-200 max-w-screen-lg lg:max-w-screen-xl mx-2 lg:mx-auto xl:px-0 lg:px-8 py-4 lg:py-0">
                        <div className="flex items-center z-10 relative">
                            <Link to="/" className="flex items-center relative z-10">
                                <img src={logo} alt="Quick Home Loan Logo" className="h-10 lg:h-28 w-48 object-cover rounded-md" />
                            </Link>
                        </div>

                        <div className="flex items-center justify-center">
                            <ul className="hidden lg:flex lg:flex-row justify-center items-center gap-8 h-full">
                                {navMenu.map((item, index) => (
                                    <li
                                        key={item.id}
                                        className="relative flex items-center group lg:text-lg underline-hover"
                                        onMouseEnter={() => item?.submenu && handleMegaMenuEnter(index)}
                                        onMouseLeave={() => item?.submenu && handleMegaMenuLeave()}
                                    >
                                        <Link
                                            to={item.slug || "#"}
                                            draggable="false"
                                            onClick={() => {
                                                if (!item.submenu) {
                                                    navigate(item.slug);
                                                    handleSubmenuClose();
                                                }
                                            }}
                                            className={`-px-2 text-base flex items-center text-black hover:text-gray-800 transition-colors duration-300 h-28`}
                                        >
                                            {item.label}
                                            {item.submenu && (
                                                <span className="ml-2 pt-2">
                                                    <span className="inline-block group-hover:hidden">
                                                        <FaAngleDown />
                                                    </span>
                                                    <span className="hidden group-hover:inline-block">
                                                        <FaAngleUp />
                                                    </span>
                                                </span>
                                            )}
                                        </Link>

                                        {item.submenu && megaMenuOpen && activeMegaMenu === index && hasMegaMenu(item) && renderHomeLoanMegaMenu(item, index)}
                                        {item.submenu && activeMegaMenu === index && !hasMegaMenu(item) && renderRegularDropdown(item, index)}
                                    </li>
                                ))}
                            </ul>

                            <div className="lg:hidden flex items-center justify-end xs:pl-12 lg:pl-0 md:items-right lg:ml-0 md:justify-right order-2">
                                <span
                                    onClick={() => {
                                        const willOpen = !menuOpen;
                                        setMenuOpen(willOpen);
                                        if (willOpen) openMobileRoot();
                                        else closeMobileMenu();
                                    }}
                                    className="text-black bg-transparent text-3xl lg:text-6xl cursor-pointer"
                                >
                                    {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                                </span>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <button
                                onClick={() => navigate("/login")}
                                className="cursor-pointer px-5 py-2.5 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition duration-300"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate("/signup")}
                                className="cursor-pointer px-5 py-2.5 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition duration-300"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {menuOpen && (
                        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => closeMobileMenu()}>
                            <div className="absolute right-0 top-0 h-full w-[100vw] max-w-[430px] bg-white shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                <div className="relative h-full">
                                    {renderMobilePanels()}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}