export const galleryYears = ['2024', '2023', '2022', '2021', '2020', '2019', '2018']

const medium = {
  en: 'Oil on canvas',
  de: 'Ol auf Leinwand',
}

const description = {
  en: '',
  de: '',
}

const dimensions = {
  en: '',
  de: '',
}

const artworkFiles = {
  2018: [
    '35-dJo4ZZpwNGCJaqDQ.JPG.avif',
    '37-dOq4aawO40UQGJkX.JPG.avif',
    '40-mxB744G4NjCRJGXg.JPG.avif',
    '41-YleyWWXEDrtbGx76.JPG.avif',
    '42-AGB4221ygpt2P2rx.JPG.avif',
    '43-Yyv799aO2Rhw9lr2.JPG.avif',
  ],
  2019: [
    '1-m2WQ88O26ZSOLxDQ.jpg.avif',
    '2-YrDNWWkOJRhJPlQ5.jpg.avif',
    '3-YKbr33VQRyuG63Ev.jpg.avif',
    '4-YD04ll7PDNtZGDX1.JPG.avif',
    '5-mnl9WW0OjzhqLRvN.JPG.avif',
  ],
  2020: [
    '6-YKbr337j8Pc8En91.jpg.avif',
    '7-dWxbvvqPqji8e3wM.jpg.avif',
    '8-AMq4115bXEUw59w6.jpg.avif',
    '9-d95g11OK52f4Pljp.JPG.avif',
    '10-YNqrBBnapKFe9k1E.JPG.avif',
    '11-AMq4115ZVlf2E48k.JPG.avif',
    '12-AE04PP3lB9Caeyvy.jpg.avif',
  ],
  2021: [
    '14-mk39vvXvMLSz77Eo.jpg.avif',
    '15-AMq4115Wr1UwvVRy.JPG.avif',
    '16-Awvk440lQGHyR02Q.jpg.avif',
    '17-YX4bllOeLxtrrRpJ.JPG.avif',
    '18-m6LJZZzXlqi5lwWe.JPG.avif',
    '19-m2WQ88OvrgUV7RkV.jpg.avif',
    '20-AMq4115ZGniQ8xrL.JPG.avif',
  ],
  2022: [
    '21-mxB744GwkVsNx80g.jpg.avif',
    '22-AzG7XXv34xs8LOxK.JPG.avif',
    '23-AoPGWWaXryikWzGw.jpg.avif',
    '36-YX4bllO79zTrMNa9.JPG.avif',
  ],
  2023: [
    '24-YbN9BB6jqgTr4oj0.jpg.avif',
    '25-dJo4ZZplO4iWVDKZ.jpg.avif',
    '30-YD04ll7qwMuLOv6r.jpg.avif',
    '32-Y4LJDDbDrJtGW37v.jpg.avif',
    '33-dWxbvvqa04ukDQxy.jpg.avif',
    '34-YleyWWXoBXCqwRPN.JPG.avif',
  ],
  2024: [
    '13-AMq4115w8bheDDwz.jpg.avif',
    '38-AR0bLLQVnkiX0gQ8.JPG.avif',
  ],
}

const makeArtwork = (year, filename, index) => {
  return {
    id: `${year}-${index + 1}`,
    year: Number(year),
    image: `/artworks/${year}/${filename}`,
    title: {
      en: '',
      de: '',
    },
    medium,
    dimensions,
    description,
    file: filename,
  }
}

export const gallery = Object.fromEntries(
  Object.entries(artworkFiles).map(([year, files]) => [
    year,
    files.map((filename, index) => makeArtwork(year, filename, index)),
  ]),
)

export const getArtworkCount = (year) => gallery[year]?.length ?? 0

export const getFeaturedYears = () => galleryYears.slice(0, 3)

export const getCoverArtwork = (year) => gallery[year]?.[0]

export const getHeroArtwork = () => gallery['2024']?.[0] ?? gallery['2023']?.[0]
