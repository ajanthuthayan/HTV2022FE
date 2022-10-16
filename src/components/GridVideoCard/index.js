import { useRouter } from "next/router";
export default function GridVideoCard({ video, index }) {
	const router = useRouter();

	const onClickHandler = (e) => {
		e.preventDefault();
		return router.push(`/video/${video.id}`);
	};
	switch (index) {
		case 0:
			return (
				<div
					style={{
						cursor: "pointer",
						gridColumnStart: "1",
						gridColumnEnd: "3",
					}}
					onClick={onClickHandler}
				>
					<img src={video.thumbnail} width="100%" />
				</div>
			);
			break;
		case 1:
			return (
				<div
					style={{
						cursor: "pointer",
						gridColumnStart: "3",
						gridColumnEnd: "4",
					}}
				>
					<img src={video.thumbnail} />
				</div>
			);
			break;
		case 2:
			return (
				<div
					style={{
						cursor: "pointer",
						gridColumnStart: "1",
						gridColumnEnd: "2",
						height: "100%",
					}}
					onClick={onClickHandler}
				>
					<img src={video.thumbnail} />
				</div>
			);
			break;
		case 3:
			return (
				<div
					style={{
						cursor: "pointer",
						gridColumnStart: "2",
						gridColumnEnd: "3",
					}}
					onClick={onClickHandler}
				>
					<img src={video.thumbnail} />
				</div>
			);
			break;
		case 4:
			return (
				<div
					style={{
						cursor: "pointer",
						gridColumnStart: "3",
						gridColumnEnd: "4",
					}}
					onClick={onClickHandler}
				>
					<img src={video.thumbnail} />
				</div>
			);
			break;
		case 5:
			return (
				<div
					style={{
						cursor: "pointer",
						gridColumnStart: "1",
						gridColumnEnd: "4",
					}}
					onClick={onClickHandler}
				>
					<img src={video.thumbnail} />
				</div>
			);
			break;
		case 6:
			return (
				<div
					style={{
						cursor: "pointer",
						gridColumnStart: "1",
						gridColumnEnd: "4",
					}}
					onClick={onClickHandler}
				>
					<img src={video.thumbnail} />
				</div>
			);
			break;
		default:
			break;
	}
}
