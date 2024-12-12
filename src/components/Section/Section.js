

function Section() {
    return (
      <>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </>
    )
}

export default Section;
