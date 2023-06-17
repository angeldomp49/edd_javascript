import ReactDOM from 'react-dom/client';
import PageWrapper from './ui/wrapper/PageWrapper';




const target: Element = document.getElementById("root")!;
const root = ReactDOM.createRoot(target);
root.render(<PageWrapper />);