import { ProgressBarContainer, ProgressBarTitleContainer, ProgressContainer, ProgressLine } from './styled';

export const ProgressBar = ({
    title,
    value,
    progress,
    color,
}: {
    title: string;
    value: string;
    progress: number;
    color?: string;
}) => {
    return (
        <ProgressBarContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ProgressBarTitleContainer>{title}</ProgressBarTitleContainer>
                <ProgressBarTitleContainer>{value}</ProgressBarTitleContainer>
            </div>
            <ProgressContainer />
            <ProgressLine style={color ? { background: color } : {}} progress={progress} />
        </ProgressBarContainer>
    );
};
