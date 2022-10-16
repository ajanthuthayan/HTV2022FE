export default function GridVideoCard({ video, index }) {
	switch (index) {
		case 0:
			return (
				<div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
					<img src={video.thumbnail} style={{ width: "100%" }} />
				</div>
			);
			break;
		case 1:
			return (
				<img
					src={video.thumbnail}
					style={{ gridColumnStart: "3", gridColumnEnd: "4" }}
				/>
			);
			break;
		case 2:
			return (
				<img
					src={video.thumbnail}
					style={{ gridColumnStart: "1", gridColumnEnd: "2", height: "100%" }}
				/>
			);
			break;
		case 3:
			return (
				<img
					src={video.thumbnail}
					style={{ gridColumnStart: "2", gridColumnEnd: "3" }}
				/>
			);
			break;
		case 4:
			return (
				<img
					src={video.thumbnail}
					style={{ gridColumnStart: "3", gridColumnEnd: "4" }}
				/>
			);
			break;
		case 5:
			return (
				<img
					src={video.thumbnail}
					style={{ gridColumnStart: "1", gridColumnEnd: "4" }}
				/>
			);
			break;
		case 6:
			return (
				<img
					src={video.thumbnail}
					style={{ gridColumnStart: "1", gridColumnEnd: "4" }}
				/>
			);
			break;
		default:
			break;
	}
}
