import Accordion from "@/components/Accordion";
import EditableTable from "./EditableTable";
import useEditableTable from "@/features/useEditableTable";

export default function AccordionTable() {
    const state1 = useEditableTable();
    const state2 = useEditableTable();

    return (
        <div className="max-w-5xl mx-auto">
            <Accordion title="Data Table 1" count={state1.data.length}>
                <EditableTable {...state1} />
            </Accordion>
            <Accordion title="Data Table 2" count={state2.data.length}>
                <EditableTable {...state2} />
            </Accordion>
        </div>
    );
}