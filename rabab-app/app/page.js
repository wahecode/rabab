
import PanelContainer from "./components/PanelContainer";
import Panel from "./components/PanelContainer/Panel";
import ResizeablePanel from "./components/PanelContainer/ResizeablePanel";
import Test from "./components/Test";
import { Tree } from "./components/Tree/Tree";

export default function Home() {
    const collections = [
        {
            id: "0",
            label: "Node 1",
            children: [
                {
                    id: "0-0",
                    label: "Node 1-1",
                },
                {
                    id: "0-2",
                    label: "Node 1-2",
                },
            ],
        },
    ];
    return (
        <div>
            <Test>Hello this is my world</Test>
            <PanelContainer>
                <ResizeablePanel minwidth="300px" maxwidth="500px">
                    <Tree data={collections} />
                </ResizeablePanel>
                <ResizeablePanel minwidth="500px" maxwidth="1000px">Center Panel</ResizeablePanel>
                <Panel> This is my Panel</Panel>
            </PanelContainer>
        </div>
    );
}
