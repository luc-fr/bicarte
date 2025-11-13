
export default function Nav({
  children,
  altura,
  modeloCaixa,
  justificacao,
  alinhamento
}) {

  const style = `
    ${altura}
    ${modeloCaixa}
    ${justificacao}
    ${alinhamento}
  `;

  return <nav className={style}>{children}</nav>;
}
