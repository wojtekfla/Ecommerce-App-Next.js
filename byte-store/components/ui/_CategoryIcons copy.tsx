'use client'

const MouseIcon = ({ className }: { className?: string }) => {

	return (
		<svg
			width="80"
			height="80"
			viewBox="0 0 384 512"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M0 192h176V0h-16C71.6 0 0 71.6 0 160v32zm0 32v128c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H0zm384-32v-32C384 71.6 312.4 0 224 0h-16v192h176z" />
		</svg>
	);
};

const MonitorIcon = () => {
	return (
		<svg
			width="80"
			height="80"
			viewBox="0 0 640 512"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M64 64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zm544 320H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h224v32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-32h224c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
		</svg>
	);
};

const HeadphoneIcon = () => {
	return (
		<svg
			width="80"
			height="80"
			viewBox="0 0 512 512"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M256 32C132.3 32 32 132.3 32 256v144c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-80c0-17.7-14.3-32-32-32H80v-32c0-97 79-176 176-176s176 79 176 176v32h-32c-17.7 0-32 14.3-32 32v80c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V256c0-123.7-100.3-224-224-224z" />
		</svg>
	);
};

const KeyboardIcon = () => {
	return (
    <svg
    width="80"
    height="80"
    viewBox="0 0 640 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M64 96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zm40 48h40v40H104v-40zm64 0h40v40H168v-40zm64 0h40v40H232v-40zm64 0h40v40H296v-40zm64 0h40v40H360v-40zm64 0h40v40H424v-40zm64 0h40v40H488v-40zM104 192h40v40H104v-40zm64 0h40v40H168v-40zm64 0h40v40H232v-40zm64 0h40v40H296v-40zm64 0h40v40H360v-40zm64 0h40v40H424v-40zm64 0h40v40H488v-40zM104 256h40v40H104v-40zm64 0h304v40H168v-40z" />
  </svg>
  )
};

const WebcamIcon = () => {
	return (
		<svg
			width="80"
			height="80"
			viewBox="0 0 448 512"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M224 0C100.3 0 0 100.3 0 224s100.3 224 224 224 224-100.3 224-224S347.7 0 224 0zm0 128a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM48 448h352c26.5 0 48 21.5 48 48v16H0v-16c0-26.5 21.5-48 48-48z" />
		</svg>
	);
};

export { MouseIcon, MonitorIcon, HeadphoneIcon, KeyboardIcon, WebcamIcon };
