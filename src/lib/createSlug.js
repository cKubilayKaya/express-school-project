export const createSlug = (name) => {
  // Türkçe karakterlerin yerine benzer harfleri koyuyoruz
  const cleanedName = name
    ?.toLowerCase() // Küçük harfe dönüştür
    ?.normalize("NFD") // Unicode normalizasyonu
    ?.replace(/[\u0300-\u036f]/g, "") // Diakritik işaretleri temizle
    ?.replace(/ı/g, "i") // Türkçe harfleri İngilizce karşılıklarına dönüştür
    ?.replace(/ğ/g, "g")
    ?.replace(/ü/g, "u")
    ?.replace(/ş/g, "s")
    ?.replace(/ç/g, "c")
    ?.replace(/ö/g, "o")
    ?.replace(/[^a-z0-9\s-]/g, "") // Sadece harf, rakam, boşluk ve tireyi bırak
    ?.trim() // Başındaki ve sonundaki boşlukları temizle
    ?.replace(/\s+/g, "-") // Birden fazla boşluğu tireyle değiştir
    ?.replace(/-+/g, "-"); // Birden fazla tıraşlı tireyi bir tane yap

  // Sayıları da slug'a ekleyelim (örneğin "2" gibi)
  const finalSlug = cleanedName?.replace(/(\d+)/g, "-$1").replace(/^-+|-+$/g, ""); // Rakamları başa veya sona eklememek için düzelt

  return finalSlug;
};
