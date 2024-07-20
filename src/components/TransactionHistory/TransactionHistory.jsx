import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.tableThead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(item => {
                    return (
                            <tr className={css.tableTr} key={item.id}>
                                <td className={css.tableTd}>{item.type}</td>
                                <td>{item.amount}</td>
                                <td>{item.currency}</td>
                            </tr>
                        
                    )
                })}
                </tbody>
        </table>
    );
 };

export default TransactionHistory;