
export default function Stars({ stars }) {

  switch (true) {
    case (stars == 1):
			return (
				<>
				⭐️
				</>
			)
    case (stars == 2):
			return (
				<>
				⭐️⭐️ 
				</>
			)
    case (stars == 3):
			return (
				<>
				⭐️⭐️⭐️
				</>
			)
    case (stars == 4):
			return (
				<>
				⭐️⭐️⭐️⭐️
				</>
			)
    case (stars == 5):
			return (
				<>
				⭐️⭐️⭐️⭐️⭐️
				</>
			)
		default: 
			return ""
  }
}
