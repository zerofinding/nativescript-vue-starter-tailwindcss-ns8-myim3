import {
  img_jpBundesLiga,
  img_jpLaLiga,
  img_jpPremierLeague,
  img_jpSerieA } from '../assets'

export const dummyLigas = [
  {
    id: 1,
    nama: "La Liga",
    gambar: img_jpLaLiga.replace('app/', '~/'),
  },
  {
    id: 2,
    nama: "Premier League",
    gambar: img_jpPremierLeague.replace('app/', '~/'),
  },
  {
    id: 3,
    nama: "Serie A",
    gambar: img_jpSerieA.replace('app/', '~/'),
  },
  {
    id: 4,
    nama: "Bundes Liga",
    gambar: img_jpBundesLiga.replace('app/', '~/'),
  },
]