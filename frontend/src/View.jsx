import DataTable from "./Comps/DataTable";

function View() {
    return (
        <div className="homeContainer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <DataTable />
            </div>
        </div>
    )
}
export default View