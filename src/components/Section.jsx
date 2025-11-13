
const Section = ({ children, corFundo, altura, espacamento, modeloCaixa }) => {

  const style = `
    ${corFundo}
    ${altura}
    ${espacamento}
    ${modeloCaixa}
  `;

  return (
    <>
      <section className={style}>{children}</section>
    </>
  );
}

export default Section;
