export function Navegacao(props) {
  return (
    <div className="navegacao">
      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-0"
        onClick={() => props.atualizarPagina(0)}
        defaultChecked
      />
      <label htmlFor="pagina-0">Pratos Principais</label>

      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-1"
        onClick={() => props.atualizarPagina(1)}
      />
      <label htmlFor="pagina-1">Sobremesas</label>

      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-2"
        onClick={() => props.atualizarPagina(2)}
      />
      <label htmlFor="pagina-2">Bebidas</label>
    </div>
  );
}
