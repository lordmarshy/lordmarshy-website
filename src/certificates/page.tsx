import { columns } from './columns';
import { DataTable } from './data-table';
import { certs } from './cert_data';

// https://ui.shadcn.com/docs/components/radix/data-table
export default function DemoPage() {
   
    return (
        <div className="w-full h-[100%] min-h-0 flex flex-col bg-black rounded-xl">
            <div className="flex-1 min-h-0 overflow-auto">
                <DataTable columns={columns} data={certs} />
            </div>
        </div>
    )
}

{/* <div className="container mx-auto py-10">
    <DataTable columns={columns} data={certs} />
</div>

<div className="w-full min-h-0 py-10 bg-blue-600 rounded-xl">
    <div className="bg-amber-900 rounded-lg p-4">
        <DataTable columns={columns} data={certs} />
    </div>
</div> */}
