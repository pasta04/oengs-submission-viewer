/** ESTのPTとかの時刻形式をHH:MM:SSの形式にする */
export const ptToTime = (estimate: string): string => {
  let str = '';
  const hourMatch = estimate.match(/(\d+)H/);
  if (hourMatch && hourMatch.length === 2) {
    str += `${hourMatch[1]}:`.padStart(3, '0');
  } else {
    str += '00:';
  }

  const minuteMatch = estimate.match(/(\d+)M/);
  if (minuteMatch && minuteMatch.length === 2) {
    str += `${minuteMatch[1]}:`.padStart(3, '0');
  } else {
    str += '00:';
  }

  const secondMatch = estimate.match(/(\d+)S/);
  if (secondMatch && secondMatch.length === 2) {
    str += `${secondMatch[1]}`.padStart(2, '0');
  } else {
    str += '00';
  }

  return str;
};

export const formatDate = (date: Date, format: string): string => {
  format = format.replace(/yyyy/g, `${date.getFullYear()}`);
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
  return format;
};

/** ユニーク処理 */
export function filterUniqueItemsById<T>(array: T[], key: string): T[] {
  // idを集約した配列を作成
  const itemIds = array.map(item => {
    return (item as any)[key];
  });
  return array.filter((item, index) => {
    return itemIds.indexOf((item as any)[key]) === index;
  });
}
