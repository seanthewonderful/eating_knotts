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

export const calculateAvgStars = (restaurant) => {

	let totalStars = 0

	for (let rating of restaurant.ratings) {
		totalStars += rating.stars
	}

	return totalStars / restaurant.ratings.length
}

export const showStarAvg = (starAvg) => {

	switch (true) {
		case (starAvg > 4.75):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`
		case (starAvg < 4.75 && starAvg > 4.25):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>`
		case (starAvg < 4.25 && starAvg > 3.75):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>`
		case (starAvg < 3.75 && starAvg > 3.25):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i>`
		case (starAvg < 3.25 && starAvg > 2.75):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		case (starAvg < 2.75 && starAvg > 2.25):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		case (starAvg < 2.25 && starAvg > 1.75):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		case (starAvg < 1.75 && starAvg > 1.25):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		case (starAvg < 1.25 && starAvg > 0.75):
			return `<i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		case (starAvg < 0.75 && starAvg > 0):
			return `<i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		case (starAvg === 0):
			return `<i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		default: 
			return '<i class="bi bi-star">'
	}
}