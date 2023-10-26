interface OuterProps {
	innerComponent: React.FC;
}

const Outer: React.FC<OuterProps> = ({ innerComponent: InnerComponent }) => (
	<InnerComponent />
)

export default Outer
