type Props = {
	children: React.ReactNode;
};

const Container = ({ children}: Props) => (
	<div className={`flex items-center justify-center p-12  h-full w-full bg-white`}>{children}</div>
);

export default Container;
