import localforage from 'localforage';

export function saveDiscountParam() {
  const { searchParams } = new URL(window.location.href);
  const discount = searchParams.get('discount');
  if (discount) {
    localforage.setItem('discount', discount);
  }
}
