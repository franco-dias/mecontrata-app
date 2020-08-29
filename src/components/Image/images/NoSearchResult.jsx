import * as React from 'react';
import Svg, { Path, Circle, Ellipse } from 'react-native-svg';

function NoSearchResult(props) {
  return (
    <Svg width={250} height={200} viewBox="0 0 250 200" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M93 135h83a7 7 0 100-14s-6-3.134-6-7 3.952-7 8.826-7H189a7 7 0 100-14h-22a7 7 0 100-14h40a7 7 0 100-14h-98a7 7 0 100 14H69a7 7 0 100 14h25a7 7 0 110 14H54a7 7 0 100 14h39a7 7 0 100 14zm107-35a7 7 0 1014 0 7 7 0 00-14 0z"
        fill="#F3F7FF"
      />
      <Circle
        cx={120.5}
        cy={99.5}
        r={33.5}
        fill="#F3F7FF"
        stroke="#6C6CE5"
        strokeOpacity={0.5}
        strokeWidth={2.5}
      />
      <Circle
        cx={120.5}
        cy={99.5}
        r={26.5}
        fill="#fff"
        stroke="#6C6CE5"
        strokeOpacity={0.5}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <Ellipse
        cx={107.399}
        cy={122.161}
        rx={3.602}
        ry={2.086}
        stroke="#6C6CE5"
        strokeOpacity={0.5}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <Circle
        cx={111.5}
        cy={90.5}
        r={9.5}
        stroke="#6C6CE5"
        strokeOpacity={0.5}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <Path
        d="M148 126l6 6"
        stroke="#6C6CE5"
        strokeOpacity={0.5}
        strokeWidth={2.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.146 138.768a6.098 6.098 0 010-8.622 6.098 6.098 0 018.622 0l11.086 11.086a6.098 6.098 0 010 8.622 6.098 6.098 0 01-8.622 0l-11.086-11.086z"
        fill="#E8F0FE"
      />
      <Path
        d="M159.884 131.03l11.086 11.086a4.848 4.848 0 01-6.854 6.854l-11.086-11.086a4.848 4.848 0 016.854-6.854z"
        stroke="#6C6CE5"
        strokeOpacity={0.5}
        strokeWidth={2.5}
      />
      <Path
        d="M158 133l11 11"
        stroke="#fff"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <Path
        d="M163.324 89.5a2.5 2.5 0 00-2.5 2.5h2.5v-2.5zm17.176 0h-17.176V92H180.5v-2.5zM183 92a2.5 2.5 0 00-2.5-2.5V92h2.5zm-2.5 2.5A2.5 2.5 0 00183 92h-2.5v2.5zm-17.176 0H180.5V92h-17.176v2.5zm-2.5-2.5a2.5 2.5 0 002.5 2.5V92h-2.5zm24.455-2.5a2.5 2.5 0 00-2.5 2.5h2.5v-2.5zm2.221 0h-2.221V92h2.221v-2.5zM190 92a2.5 2.5 0 00-2.5-2.5V92h2.5zm-2.5 2.5A2.5 2.5 0 00190 92h-2.5v2.5zm-2.221 0h2.221V92h-2.221v2.5zm-2.5-2.5a2.5 2.5 0 002.5 2.5V92h-2.5zM166 99.777v-2.5a2.5 2.5 0 00-2.5 2.5h2.5zm0 0h-2.5a2.5 2.5 0 002.5 2.5v-2.5zm8.176 0H166v2.5h8.176v-2.5zm0 0v2.5a2.5 2.5 0 002.5-2.5h-2.5zm0 0h2.5a2.5 2.5 0 00-2.5-2.5v2.5zm-8.176 0h8.176v-2.5H166v2.5zM52.279 110.5a2.5 2.5 0 00-2.5 2.5h2.5v-2.5zm4.221 0h-4.221v2.5H56.5v-2.5zM59 113a2.5 2.5 0 00-2.5-2.5v2.5H59zm-2.5 2.5A2.5 2.5 0 0059 113h-2.5v2.5zm-4.221 0H56.5V113h-4.221v2.5zm-2.5-2.5a2.5 2.5 0 002.5 2.5V113h-2.5zm12.545-2.5a2.5 2.5 0 00-2.5 2.5h2.5v-2.5zm17.176 0H62.324v2.5H79.5v-2.5zM82 113a2.5 2.5 0 00-2.5-2.5v2.5H82zm-2.5 2.5A2.5 2.5 0 0082 113h-2.5v2.5zm-17.176 0H79.5V113H62.324v2.5zm-2.5-2.5a2.5 2.5 0 002.5 2.5V113h-2.5zM76 121.777v-2.5a2.5 2.5 0 00-2.5 2.5H76zm0 0h-2.5a2.5 2.5 0 002.5 2.5v-2.5zm8.176 0H76v2.5h8.176v-2.5zm0 0v2.5a2.5 2.5 0 002.5-2.5h-2.5zm0 0h2.5a2.5 2.5 0 00-2.5-2.5v2.5zm-8.176 0h8.176v-2.5H76v2.5z"
        fill="#6C6CE5"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default NoSearchResult;
