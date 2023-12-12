import { toast } from 'react-toastify'

export function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const notify = (type, message) => {
    switch (type) {
      case "success":
        toast.success(message)
        return
      case "info":
        toast.info(message)
        return
      case "warning":
        toast.warning(message)
        return
      case "error":
        toast.error(message)
        return
      default:
        toast(message)
        return
    }
  }