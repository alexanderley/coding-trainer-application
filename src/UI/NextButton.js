import classes from "./NextButton.module.css";

const NextButton = (props) => {
  return (
    <button
      className={classes.selectButton}
      onClick={props.onClick}
      style={{ minWidth: "200px" }}
    >
      <span
        style={{
          whiteSpace: "nowrap",
          paddingRight: "15px",
        }}
      >
        {" "}
        {props.children}
      </span>
      {/* <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_7_9)">
          <g clip-path="url(#clip0_7_9)">
            <path
              d="M27 33.7143L32.7143 28L27 22.2857L28.1429 20L36.1429 28L28.1429 36L27 33.7143Z"
              fill="white"
            />
          </g>
          <rect
            x="4.5"
            y="0.5"
            width="54.1429"
            height="55"
            rx="27.0714"
            stroke="white"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_7_9"
            x="0"
            y="0"
            width="63.1429"
            height="64"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_7_9"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_7_9"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_7_9">
            <rect
              width="9.14286"
              height="16"
              fill="white"
              transform="translate(27 20)"
            />
          </clipPath>
        </defs>
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="a"
        viewBox="0 0 196.94 200"
        style={{ fill: "white" }}
      >
        <defs>
          <style></style>
        </defs>
        <path
          class="b"
          d="M82.14,120.41l20.41-20.41-20.41-20.41,4.08-8.16,28.57,28.57-28.57,28.57-4.08-8.16Z"
        />
        <path
          class="b"
          d="M98.47,200C44.17,200,0,155.83,0,101.53v-3.06C0,44.17,44.17,0,98.47,0s98.47,44.17,98.47,98.47v3.06c0,54.3-44.17,98.47-98.47,98.47Zm0-196.43C46.14,3.57,3.57,46.14,3.57,98.47v3.06c0,52.33,42.57,94.9,94.9,94.9s94.9-42.57,94.9-94.9v-3.06C193.37,46.14,150.8,3.57,98.47,3.57Z"
        />
      </svg>
    </button>
  );
};

export default NextButton;
