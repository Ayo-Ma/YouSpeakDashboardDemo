function Card({ className = "", children }) {
    return (
      <div className={`rounded-2xl border border-slate-200 bg-white p-5 ${className}`}>
        {children}
      </div>
    );
  }

export default Card;