import Link from 'next/link'

export const metadata = {
  title: "Dimensions Credit Packs",
  description: "Buy Dimensions credit packs with 60-day expiry and D-Cloud bonuses."
}

const packs = [
  { amount: 5,  bonus: 0 },
  { amount: 10, bonus: 0 },
  { amount: 20, bonus: 0 },
  { amount: 30, bonus: 0 },
  { amount: 50, bonus: 1 },
  { amount: 75, bonus: 1 },
  { amount: 100, bonus: 1 }
]

export default function CreditPacksPage() {
  return (
    <div style={{ padding: "40px", color: "#e6eef8" }}>
      <Link href="/" className="small">← Back</Link>

      <h1 style={{ marginTop: 20 }}>Dimensions Credit Packs</h1>
      <p className="small">
        All credit packs have a <strong>60-day expiry</strong>.  
        Packs over <strong>$50</strong> include a <strong>$1 D-Cloud bonus</strong>.
      </p>

      <div style={{
        marginTop: 30,
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))"
      }}>
        {packs.map((p, i) => (
          <div key={i} className="card" style={{ padding: "20px" }}>
            <h2>${p.amount}</h2>
            <p className="small">Credit pack • 60-day expiry</p>
            {p.amount >= 50 && (
              <p style={{ color: "#7c3aed", marginTop: 8 }}>
                + $1 bonus to D-Cloud
              </p>
            )}
            <button style={{
              marginTop: 12,
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#7c3aed",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem"
            }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
