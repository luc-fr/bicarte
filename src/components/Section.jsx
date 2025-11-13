
const Section = ({ children, corFundo, altura, espacamento }) => {

  const style = `
    ${corFundo}
    ${altura}
    ${espacamento}
  `;

  return (
    <>
      <section className={style}>{children}</section>
    </>
  );
}

export default Section;
