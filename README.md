# Lostark Tips

Smilegate RPG LostArk's advanced honing simulator and package efficiency calculator

## Advanced honing simulator

> You can use simulator [here](https://lostark-tips.vercel.app/simulator).

| Honing Simulator                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------- |
| ![simulator-gif](https://github.com/shyuuuuni/lostark-tips/assets/63703962/52a63977-66df-431e-980a-726e46467864) |

- Experience all the features of the real game.
- Calculates honing material consumption in `Gold`.
- Check your honing history.

## Package efficiency calculator

> You can use calculator [here](https://lostark-tips.vercel.app/calculator).

| Package efficiency calculator                                                                                     |
| ----------------------------------------------------------------------------------------------------------------- |
| ![calculator-gif](https://github.com/shyuuuuni/lostark-tips/assets/63703962/1e33ef14-823c-4b28-85d0-dc93d22c1fa4) |

- Show efficient packages at a glance.
- Calculate the value of the package in `Gold`.
- Select target materials to calculate efficiency.

## For developers

### Installation

1. Clone this repository

```bash
git clone https://github.com/shyuuuuni/lostark-tips.git
```

2. Install dependencies

- `node.js >= 18.17.0`
- `npm >= 8.0.0`

```bash
npm install
```

3. Run dev server

```bash
npm run dev
```

You can use the project at http://localhost:3000/simulator

### Add packages in calculator

1. You can add package's item in `/src/app/(defaultLayout)/calculator/package/_lib/packedItem.ts`. For example,

<table>
  <tr>
    <td>
    <img src="https://github.com/shyuuuuni/lostark-tips/assets/63703962/e01d4b9d-4fb7-46e0-9b1b-4712a8e3b187"}/>
    </td>
    <td>
    <pre><code>
export const 최상급_돌파석_선택_상자 = new PackedItem.Builder(
  '최상급 돌파석 선택 상자',
)
  .setPackedType('선택')
  .addContent(new AtomItem('경이로운 명예의 돌파석', 100))
  .addContent(new AtomItem('찬란한 명예의 돌파석', 20))
  .build();
    </code></pre>
    </td>
  </tr>
</table>

2. And then, you can pack your packed items in `/src/app/(defaultLayout)/calculator/package/_lib/package.ts` with `.addPackageItem()`. For example,

```tsx
const PC방_전용_돌파_파편_패키지_230913 = new Package.Builder(
  '1',
  '[PC방 전용] 돌파&파편 패키지',
  33000,
  '로얄 크리스탈',
)
  .setImage(shopIconPcImg)
  .setSaleDate({ startDate: '2023-09-13', endDate: null })
  .setRepurchaseCycle('월간')
  .setPurchaseLimit(3)
  .addPackageItem(최상급_돌파석_선택_상자, 30) // you can add like it.
  .addPackageItem(최상급_융화_재료_선택_상자, 5)
  .addPackageItem(명예의_파편_주머니_대, 200)
  .build();
```

> **Tip**: You can manage which packages are displayed on the screen by modifying the elements of the packages array.

```ts
export const packages: Package[] = [
  PC방_전용_돌파_파편_패키지_230913,
  주간_성장_재료_패키지_240228,
  상급_보조_융화_패키지_240131,
  월간_올인원_최상급_성장_패키지_230412,
];
```
