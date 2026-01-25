import toast from "react-hot-toast";

export const notify = (message: string, icon?: string) =>
  toast(message, {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Custom Icon
    icon: icon,

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },

    // Additional Configuration
    removeDelay: 1000,

    // Toaster instance
    toasterId: "default",
  });

// show toast function
type ToastType = "success" | "error" | "loading";
export const showToast = (type: ToastType, message = "Done!") => {
  toast[type](message);
};
