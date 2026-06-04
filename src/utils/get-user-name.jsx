// kullanıcı etiketi için oluşturduk ve Nav componentında çağırdık.
// trim: boşlukları kaldırdık, toLowerXacse: hepsini küçük harf yaptık, replaceAll: boşlukların yerine alt çizgi koyduk, slice: 20 karakterden sonrasını kesmek için yazdık.
const getUserName = (name) => {
  return "@" + name.trim().toLowerCase().replaceAll(" ", "_").slice(0, 20);
};

export default getUserName;
