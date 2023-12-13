
export default function StarAvg({ starAvg }) {

	switch (true) {
		case (starAvg > 4.75):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
				</>
			)
		case (starAvg < 4.75 && starAvg > 4.25):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>
				</>
				)
		case (starAvg < 4.25 && starAvg > 3.75):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
				</>
			)
		case (starAvg < 3.75 && starAvg > 3.25):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i>
				</>
			)
		case (starAvg < 3.25 && starAvg > 2.75):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
				</>
				)
		case (starAvg < 2.75 && starAvg > 2.25):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
				</>
			)
		case (starAvg < 2.25 && starAvg > 1.75):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
				</>
				)
		case (starAvg < 1.75 && starAvg > 1.25):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
				</>
			)
		case (starAvg < 1.25 && starAvg > 0.75):
			return (
				<>
				<i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
				</>
				)
		case (starAvg < 0.75 && starAvg > 0):
			return (
				<>
				<i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
				</>
			)
		case (starAvg === 0):
			return (
				<>
				<i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
				</>
				)
		default: 
			return <i class="bi bi-star"></i>
	}
}
