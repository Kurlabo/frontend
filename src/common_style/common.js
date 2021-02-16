// draggable = false Style
// style = { drag }로 적용
export const drag = {
  msUserSelect: 'none',
  MozUserSelect: 'none',
  KhtmlUserSelect: 'none',
  WebkitUserSelect: 'none',
  userSelect: 'none',
};

// tailwind config의 color 속성에 inputRadio:#dddddd 추가 후 사용
// 체크된 보라색 아이콘 스타일
export const formRadioIcon = 'inline-block w-10 h-10 border-inputRadio mr-r-1.2 text-kp-600';

// tailwind config의 color 속성에 inputGray:#cccccc 추가 후 사용
// 체크안된 회색 아이콘 스타일
export const formRadioIcon2 = `${formRadioIcon} text-inputGray`;
