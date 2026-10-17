import { ArrowRight, FileCheck2, Inbox, ListTodo, BrainCircuit, Globe, FolderCheck, ShoppingBag, ListTree, Code2 } from 'lucide-react';

const flows = [
  [{ icon: Inbox, label: 'Support inbox' }, { icon: BrainCircuit, label: 'Azure AI' }, { icon: ListTodo, label: 'Assigned tasks' }],
  [{ icon: Globe, label: 'Government portal' }, { icon: FileCheck2, label: 'File validation' }, { icon: FolderCheck, label: 'Customer folders' }],
  [{ icon: Code2, label: 'Back office' }, { icon: ListTree, label: 'Dynamic categories' }, { icon: ShoppingBag, label: 'E-commerce' }],
];

export function ProjectFlow({ index }: { index: number }) {
  return <div className="project-flow" aria-label="Project workflow">
    <div className="flow-heading"><span className="flow-dot" />{['INTELLIGENT AUTOMATION', 'RELIABLE PROCESSING', 'CONNECTED COMMERCE'][index]}</div>
    <div className="flow-nodes">{flows[index]?.map(({ icon: Icon, label }, i) => <div className="flow-step" key={label}>
      <div className="flow-node"><Icon strokeWidth={1.25} /><span>{label}</span></div>
      {i < 2 && <ArrowRight className="flow-arrow" strokeWidth={1} />}
    </div>)}</div>
    <div className="flow-caption"><span>INPUT</span><span>PROCESS</span><span>OUTPUT</span></div>
  </div>;
}
