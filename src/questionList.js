const questions = [
  {
    question: 'Pain ou Galette?',
    options: [
      { title: 'Pain', img: 'https://s3-alpha-sig.figma.com/img/9c69/7695/7bc08fbee8fd6d88eaebc2d9383fbca2?Expires=1636329600&Signature=acMnKxyWWIEvqRRLOCvWMkIX4cna0nXfJg9WQzDWW4FntqHPa3~xo5v7Bq4vmZ2qrtCFhwxySNLwhktKux1L7Inu-mg0EdMI8JepADC4J4iakXRShrEAyxiLmAhKnN4HcyM-xD-KLNVH9hx0hbE0Iua2YuTXBiMnfmmGLWQ~uLjugMVKXII8U-iylYUF7Mn4H~xWJTmrZ0p-DhFFAIiXJyS3LLIxYYo97bIIcefGMwhEy3evoxLq~qTuQg4JqXKUvtn4Srpim06Kt0VvWnpcZQGNUwJRzms0-GVj69KPvyi8X2~mM8nUDG9OcYEj9uU7BDQ-unEMEybMeDf4DdU38Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'Galette', img: 'https://s3-alpha-sig.figma.com/img/49f3/f9ac/c75c8cb5d264b671ca3f6b40edb5e6d5?Expires=1636329600&Signature=GcCEV6ItIJUAmFMawx-1MT83Hc2tTnM-36Mjr-~0qLiv7BXK1iRizrIQJGNF9hqbV-ROfZfJVJNIwBEUy3jujAPs3i0JX3r7JARV3sGjTN~nfVQmAtZu9EFmvZWxVQ1h11O8csBYHkIEf5moVdopzIA1crM3jtPQkLV0pAVJurERlUanjJatqP75UCG0GmcPdsEHOgUCQeJC2M8y4VxYKgahTlMGkzoknjXs9x4zWR~VrEZG85z-W-ehrqO0DDKUu31EhhDx6JrrKnOb-egHq5qwSmMILQhVYPxOiiJhXJ22aFljz7RgjZuFLLWS0GSDI-Ad1kj4lf0~Pdvvz00wng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
    ],
  },
  {
    question: 'Plutot viande ou tofu?',
    options: [
      { title: 'Viande', img: 'https://s3-alpha-sig.figma.com/img/0cb1/8554/a3fb2a52f5a002122962d58ad2cc9314?Expires=1636329600&Signature=YpZp4kVkl-Mb7vYXxsQ7rVHkdlsQiIfEsZb~ijXL5dc0UiJXbxnK0SBAyPB9njYfIuFEH85ReNyhLKPMtJo5qDdgJCLMn~Bi9YTsDZjNYce4qfTHypwP91m3WJ8Plpas9hjCkBKmPMOXLnqCmxzLaoWlfvQGRtCo-GxrAb42wQXjgLdm-RlTCVDeRs4MKX-tVffsmIx9k9~tf8ZtI1Ti6a5VpIyX-KYrgPcbIi2eaSdSFB8C1E75VYnyCXmc0QM-hZ0R-liM2NPF47i12oVnn17ADHgykVXI5hX-39Kr7Lkc9yuXiy2Skw15SvkpN5VO2rpwazbsNxMMey4ctDvtNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'Tofu', img: 'https://s3-alpha-sig.figma.com/img/8199/e509/b82fa51f4748372692bad3d6c8ce317c?Expires=1636329600&Signature=aOgM923J2RnKSWByNB1~MynW8jR0Z0Qvh1QnqD3Ab-gi-eok4AUbI8tt~8dNoUbGcrQIBpvj2dBSRnSXI5IkGIz7iTJfvuT1mwT~yMQqeqQ5AQjKsBpr8g9gvUL9SDmJhgu1OAVqrXMA4sclrOqStELWlRbhWX27CzDwNa0btMMvwIUHjpldN5zxKSfvcuAIPQ1p8y7DPQDXPmnkV-jcdWF09R-lrAoxFsQUPM54d3ddttba-OoneaIylDThnVDJ2Bu7tt0K3GK5~aNyNnC9l8V9Xg~mq~b9KmdhP4nVrcGRIe~qp7HItg~~AsL82D5rYE9y-XQLQ73umhyht1-PYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
    ],
  },
  {
    question: 'Salade, tomates, oignons?',
    multiple: true,
    limit: 2,
    options: [
      { title: 'Salade', img: 'https://s3-alpha-sig.figma.com/img/6a34/bb55/c28bc1ccb6b804f29315b943a274a638?Expires=1636329600&Signature=gGBPEIE-agcH6FPG-GmXnGjtlIy~1z2EzN67LZ8z8gnLmduHu6LU54uFUmxSpnuIuUYenCbb172qfPCQIP0MeMj9UfDg94kBq7JC~7hHtjcEG1oT-HSQ0jLgzUvAMLSiTmYjbE1CZ99s2AkXTgv8gXZqKMaq9dtZ4oOMXex9pazwv61EomzCoYWKFfrzFN~7ANM851QMHCWzb-ALZppiA7ZRNoQZCjmgK1tQcoXkoqq8wXprkSbWPN3qCcm27yTJnCa03m353ozCXd570p6iVn~2VED5WZa2p3oLv6xJXq6wBgwVMUaAkeZOMu6Lf-4Ck8xJqZ~13diCDAgPP5dVzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'Tomate', img: 'https://s3-alpha-sig.figma.com/img/e539/d74f/75581a2465f74031848cb36a5fdf6ed0?Expires=1636329600&Signature=cnl64AcnSquLJVrhswxmR~8tMIZTRg6JTbLPwKU7wbclZlHloz2DnE8HNqZB00v0YG1lURmzv0gVMUacq-o01aG0bmRTbogOtrAAC-ai5UfJCdoYScXJ-Ws-E1JO--uYLIn37Ky88SFLI~CPfldAf6A578YNA2ghD0XB3sdZc1taqH7HHmnTm9dsycTyA1i~l6UaOvYK7jMawd~jljlL6MyAzZsY~l46Je4Rke4wvKhd0F3ZJGQBDN49LZY-M-xD~4xEk8dw4TSk8me21BZcHEX~1KtHqZ2C7fMemfI8TNdp~3Vva8Bun3iLGm9i~P5Av8YXotrSHV2T0KjuLBkNaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'Oignon', img: 'https://s3-alpha-sig.figma.com/img/b6ec/b03b/546fd6a961f67e14ac837dfde7755ba9?Expires=1636329600&Signature=E-5XzB4IqBqDSR-M2hgfBsEyu~MCc4mAmvb4AdY0WRRMmWL0flTwSGt3lkdVudn2vl~FcDKy2fxojKdKAVIsnr~S~hu1MDNKiOE9si-RTTR-0JUQavFyHHgv92wgnsRc25QZFdRNk92XR83CTLFp87PHytWAdDQBQsD9mE~ernk0iz2Q9ywWkXjF01TxA-CzpMOeLCvKqy202MmmRHJp5r9giyxg~7rsa1oy-31s8z1Chq07BPt9XPRNhUW-B-2d4YyKRxpZuuJ6I77TXIbS2ZuTdgp2tlliB8XIPB8QIidSJbns7shLSJd3oxOCxGoSmkUHKruH9P~Rv0cN3VgLJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
    ],
  },
  {
    question: 'Quelques sauces?',
    multiple: true,
    limit: 2,
    options: [
      { title: 'Blanche', img: 'https://s3-alpha-sig.figma.com/img/86b7/3d65/85cfcddad9950b73d4a6f74bbf83740b?Expires=1636329600&Signature=U2A0r2fZxey7gekRiF8Bu~BKgeQO3IXdDENZ7MsR-tKqFAlrCcXaVJFqxt1TZ-wQCCxpe85JJKWCrRqS-vn7TM3PXXZzrBcrUs1seQIjg7NM3887sTSGW0Hot8Ypri3xP7kRjVc1EC0NwakUohDcG6t4dEeSCTJQ18FOBfCi4BSIlC5PzO8fi-hoVLxJNHTSMKAjCB1kqpMugE9mRnxhUJA--aq8qyFLvCudg8y4eUFC1y9LI7UJWtzIYWEXG-QsYy6qiG-d~~9dmvEbALOYs-QEXBgR8TE0-jR1jLKshDljyn3hSuMJC4xriF8DKw5lBfOLe~Jp9krwrTJ5YzdgLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'Harissa', img: 'https://s3-alpha-sig.figma.com/img/d26a/930d/6da6da9a38d0d3636cadfe430f162516?Expires=1636329600&Signature=H0Ly5X-p0rV8pXeqjnqUmc-Gw8HkDxk24s5k-SQuIy-kaucUY4V-pysTvwXV7pa6f1Hgc9d1enHoSQMaVwrbyy1CARrmJb~mpCPeIzNuo1JKkFM5oZ9oIpRM5Oso93EGKIi1afWzQ232z2AJdV3Qhz1ubbv5WJrr-7HiYoM-DDIlxWsECw~cEvRhTcqj1AVo3ClFFp4C1kdQUNytLJiN82pJRonYtoUAyWDujxL1BQd7yB3Gb2tfuoj8wEuDwQHYMCgiwQeFRK1dfzJR5nFajo9TQ~gxFkcEuX07i7FFxQGpwK2OqohoOGPBgXqw-EspcCokLmkAJAJjmnCcLRqroA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'Andalouse', img: 'https://s3-alpha-sig.figma.com/img/041c/61b7/61f0734d93603beadd85e4942a9ad5db?Expires=1636329600&Signature=SE7918qhV8e3tR-pQgTYNm4zESEF-lHYm4UccU07I99FjnVci-hxFVJaX-uZ5E43tHmv~TVPjdJeoqHz~6FRDwSGN2Y1xpQBH45aLW~IPtU6d6vtIS8uKv6CpRm5-1ZYjnOICfqlYP5kfDxkfdFSqJu4JcAQniExw6KL4NrCIa1kOFJqg1QMtrRcNby2POVJVjr1AjOGzlyZfKWHfeOliOtdxwz8PyN2lyMFwHM3EBS8-4S9JkoKk4JziyRShyvjtR1Qy2nThDf~ID~fZ9fUR2t6~bRaZiWP5pEJK7YAzhcMhwmuVskegXUgFeRbJFAtXwWW0xM5yJUkAKA9-5bGNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'BBQ', img: 'https://s3-alpha-sig.figma.com/img/20ea/80aa/f2a79d4257e67793125d27bb0e7c2c9b?Expires=1636329600&Signature=NglJK4nnb1LZOk~YAdxJ0rqIV3zcAn-48kp2nCp1joOu86DiKb6fuSdylgg7VQKTuArk~B4dqmS7Odg5yVBjcxACraIFUXaIfM8ghqPH1QBRsGN5BfJgaJV1tZi~ZWpa-zIwfkJsZaRdbUItcd8R7tCcOO8WpW59j6Lptc--Pss7ljsJBudWooOpdwohAum-aSb3O6ChsnBBbL-24zvOQN0n1SRdJgYUnr05nZl59HhclVhbkIuiclaSfGOjvAm9JeJfXpH~O4Aq5mRS1ryASxOmgMi1EKatPRskJvQkguyYWkZTJF5pMWSkdQ-eTb-GwMhqcHmSGoaXT2boMeIRkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'Ketchup', img: 'https://s3-alpha-sig.figma.com/img/d492/774c/2abb5dc6d19b5ef554376bc4b546615c?Expires=1636329600&Signature=Wax0y48~B~62aXVpxbvk-KOPwoGTIqpOW-WWjJW5vzqk0iFF~G3fbF31TXqzW1H9Fkcc35d73aEofsu3lZw-TPTf~ZicYMYzRlF50Wo~jDhrDLTUFOeQGkmOcEf-lKGVnBGj~4Z7RFlHSyi5bI1hyUkvO3zy3Ot7fsSSCzz3W56X2LfuShIwR2H2uD1wtfGZMT6Pt~mKJscFr4ytMDUG6U64urw-LLANSHFeEDYWDrdqaytcDqma7OgBg-h93S8kbvB4aOAhPAI3wUQJOBbhunSKiqbMVVu4yBdMrnfWyT2juV2-0A0tVnm71Bp37EzB2OtNUSaTOsckzGPTHXatag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
      { title: 'Cury', img: 'https://s3-alpha-sig.figma.com/img/cdd1/c63a/329a80a0617c0ffda5bc238b11b10146?Expires=1636329600&Signature=Zu-ZdsKjb32JsznWqE~esPbtji~OqOFmQmu8GQvbLGEHs8Z87r0PgtukzTE06i9gHQ2FtKwgMXbJtsbJsn1NyAGBQsNspLAb6psP5mcANMc7SBSppwWkBy~BKejo6HpxIXgKk44mo4xGQmSA2pMNigW~5dn8AziW~CeQFo94kIxDIXoUTTrDy5Hb3w6kuAI85ikqAOeI-MlgwnyrmCrwDUBSy6OqYh9CXHEa8oau17sBzxVUcvBk8ac62No0zAwVnuvuDn62OpDgdGvnrzKcv05mTqUQRGF4m1tXDgZJZinIPwH6qaoYF~n1pw1pd1y2N7sJpe0ed2CItuRY6cJjGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', selected: false },
    ],
  }
];

export default questions;
