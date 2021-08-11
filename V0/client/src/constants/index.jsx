export const rules = {
  empty: [{ required: true, message: '항목이 비어있습니다.' }],
  date: [{ required: true, message: '날짜를 선택해주세요.' }],
};

export const items = {
  total: {
    placeholder: '오늘의 금액',
    label: '오늘의 금액',
  },
  createDate: {
    placeholder: '날짜를 선택해주세요.',
    label: '날짜',
  },
  startingPoint: {
    placeholder: '당상(출발)',
    label: '당상(출발)',
  },
  arrivalPoint: {
    placeholder: '당착(도착)',
    label: '당착(도착)',
  },
  item: {
    placeholder: '품목',
    label: '품목',
  },
  price: {
    placeholder: '금액',
    label: '금액',
  },
  fee: {
    placeholder: '수수료',
    label: '수수료',
  },
  bill: {
    placeholder: '계산서',
    label: '계산서',
  },
  receipt: {
    placeholder: '인수증',
    label: '인수증',
  },
  remark: {
    placeholder: '비고',
    label: '비고',
  },
  fuel: {
    placeholder: '유류비',
    label: '유류비',
  },
  toll: {
    placeholder: '통행료',
    label: '통행료',
  },
  meal: {
    placeholder: '식대',
    label: '식대',
  },
  etc: {
    placeholder: '기타',
    label: '기타',
  },
};
