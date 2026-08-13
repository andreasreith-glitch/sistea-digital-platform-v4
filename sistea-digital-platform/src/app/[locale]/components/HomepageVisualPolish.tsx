export default function HomepageVisualPolish() {
  return (
    <style>{`
      /* SISTEA V16.5 visual polish — solutions cards */
      #solutions-premium-host #solutions {
        background:
          radial-gradient(circle at 12% 0%, rgba(42, 181, 214, .12), transparent 28%),
          linear-gradient(180deg, #123f5a 0%, #0c354f 100%) !important;
      }

      #solutions-premium-host #solutions > div > div:last-child {
        display: grid !important;
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        gap: 20px !important;
        margin-top: 42px !important;
      }

      #solutions-premium-host #solutions article {
        position: relative !important;
        display: grid !important;
        grid-template-columns: 190px minmax(0, 1fr) !important;
        min-height: 188px !important;
        overflow: hidden !important;
        border: 1px solid rgba(181, 225, 239, .18) !important;
        border-radius: 24px !important;
        background: linear-gradient(135deg, rgba(14, 66, 94, .96), rgba(8, 45, 69, .98)) !important;
        box-shadow: 0 18px 44px rgba(0, 19, 34, .24) !important;
        transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease !important;
      }

      #solutions-premium-host #solutions article:hover {
        transform: translateY(-4px) !important;
        border-color: rgba(103, 221, 242, .42) !important;
        box-shadow: 0 24px 52px rgba(0, 18, 32, .34) !important;
      }

      #solutions-premium-host #solutions article::after {
        position: absolute;
        top: 14px;
        right: 16px;
        display: grid;
        width: 34px;
        height: 34px;
        place-items: center;
        border: 1px solid rgba(132, 224, 241, .22);
        border-radius: 999px;
        background: rgba(36, 190, 215, .10);
        color: rgba(177, 236, 246, .88);
        font-size: 11px;
        font-weight: 900;
        letter-spacing: .08em;
      }

      #solutions-premium-host #solutions article:nth-child(1)::after { content: "01"; }
      #solutions-premium-host #solutions article:nth-child(2)::after { content: "02"; }
      #solutions-premium-host #solutions article:nth-child(3)::after { content: "03"; }
      #solutions-premium-host #solutions article:nth-child(4)::after { content: "04"; }
      #solutions-premium-host #solutions article:nth-child(5)::after { content: "05"; }
      #solutions-premium-host #solutions article:nth-child(6)::after { content: "06"; }
      #solutions-premium-host #solutions article:nth-child(7)::after { content: "07"; }
      #solutions-premium-host #solutions article:nth-child(8)::after { content: "08"; }

      #solutions-premium-host #solutions article > div:first-child {
        display: grid !important;
        height: auto !important;
        min-height: 188px !important;
        place-items: center !important;
        padding: 16px !important;
        border-right: 1px solid rgba(180, 223, 237, .12) !important;
        background:
          radial-gradient(circle at 50% 35%, rgba(142, 221, 235, .16), transparent 55%),
          linear-gradient(160deg, #0b2c43 0%, #123f59 100%) !important;
      }

      #solutions-premium-host #solutions article img {
        width: 100% !important;
        height: 138px !important;
        max-height: 138px !important;
        object-fit: contain !important;
        box-sizing: border-box !important;
        padding: 10px !important;
        border: 1px solid rgba(121, 190, 210, .25) !important;
        border-radius: 17px !important;
        background: #dcebf2 !important;
        box-shadow: 0 10px 26px rgba(0, 18, 30, .22) !important;
      }

      #solutions-premium-host #solutions article > div:last-child {
        display: flex !important;
        min-width: 0 !important;
        flex-direction: column !important;
        justify-content: center !important;
        padding: 26px 58px 26px 24px !important;
        background: transparent !important;
      }

      #solutions-premium-host #solutions article h3 {
        margin: 0 !important;
        color: #ffffff !important;
        font-size: 21px !important;
        line-height: 1.16 !important;
        font-weight: 900 !important;
        letter-spacing: -.02em !important;
      }

      #solutions-premium-host #solutions article p {
        margin-top: 10px !important;
        color: rgba(221, 241, 248, .76) !important;
        font-size: 14px !important;
        line-height: 1.55 !important;
      }

      @media (max-width: 980px) {
        #solutions-premium-host #solutions > div > div:last-child {
          grid-template-columns: 1fr !important;
        }
      }

      @media (max-width: 640px) {
        #solutions-premium-host #solutions {
          padding-left: 18px !important;
          padding-right: 18px !important;
        }

        #solutions-premium-host #solutions article {
          grid-template-columns: 1fr !important;
        }

        #solutions-premium-host #solutions article > div:first-child {
          min-height: 148px !important;
          border-right: 0 !important;
          border-bottom: 1px solid rgba(180, 223, 237, .12) !important;
        }

        #solutions-premium-host #solutions article img {
          height: 118px !important;
          max-height: 118px !important;
        }

        #solutions-premium-host #solutions article > div:last-child {
          padding: 22px 52px 22px 20px !important;
        }
      }
    `}</style>
  );
}
