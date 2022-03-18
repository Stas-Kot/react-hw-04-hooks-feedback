import { Paragraph } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <Paragraph>Good: {good}</Paragraph>
      <Paragraph>Neutral: {neutral}</Paragraph>
      <Paragraph>Bad: {bad}</Paragraph>
      <Paragraph>Total: {total()}</Paragraph>
      <Paragraph>Paragraphositive feedback: {positivePercentage()}%</Paragraph>
    </>
  );
}
