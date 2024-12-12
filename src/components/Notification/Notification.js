import Section from "../Section/Section";

function Notification() {

    return (
      <Section title="Statistic">
        <p>{this.props.message}</p>
      </Section>
    )
  }


export default Notification;
