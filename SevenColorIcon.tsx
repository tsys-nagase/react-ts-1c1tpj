import React from 'react';

function SevenColorIcon() {
  return (
    <svg width="100" height="100">
      <circle
        id="myCircle"
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="2"
        fill="#FF0000"
      >
        <animate
          attributeName="fill"
          from="#FF0000"
          to="#FF7F00"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
          attributeType="XML"
          calcMode="spline"
          keyTimes="0;0.14;0.28;0.42;0.56;0.7;0.84;1"
          keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
        />
        <animate
          attributeName="fill"
          from="#FF7F00"
          to="#FFFF00"
          dur="1s"
          begin="1s"
          repeatCount="indefinite"
          attributeType="XML"
          calcMode="spline"
          keyTimes="0;0.14;0.28;0.42;0.56;0.7;0.84;1"
          keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
        />
        <animate
          attributeName="fill"
          from="#FFFF00"
          to="#00FF00"
          dur="1s"
          begin="2s"
          repeatCount="indefinite"
          attributeType="XML"
          calcMode="spline"
          keyTimes="0;0.14;0.28;0.42;0.56;0.7;0.84;1"
          keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
        />
        <animate
          attributeName="fill"
          from="#00FF00"
          to="#0000FF"
          dur="1s"
          begin="3s"
          repeatCount="indefinite"
          attributeType="XML"
          calcMode="spline"
          keyTimes="0;0.14;0.28;0.42;0.56;0.7;0.84;1"
          keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
        />
        <animate
          attributeName="fill"
          from="#0000FF"
          to="#8B00FF"
          dur="1s"
          begin="4s"
          repeatCount="indefinite"
          attributeType="XML"
          calcMode="spline"
          keyTimes="0;0.14;0.28;0.42;0.56;0.7;0.84;1"
          keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
        />
        <animate
          attributeName="fill"
          from="#8B00FF"
          to="#FF00FF"
          dur="1s"
          begin="5s"
          repeatCount="indefinite"
          attributeType="XML"
          calcMode="spline"
          keyTimes="0;0.14;0.28;0.42;0.56;0.7;0.84;1"
          keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
        />
        <animate
          attributeName="fill"
          from="#FF00FF"
          to="#FF0000"
          dur="1s"
          begin="6s"
          repeatCount="indefinite"
          attributeType="XML"
          calcMode="spline"
          keyTimes="0;0.14;0.28;0.42;0.56;0.7;0.84;1"
          keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
        />
      </circle>
    </svg>
  );
}

export default SevenColorIcon;
