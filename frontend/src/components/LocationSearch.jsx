export default function LocationSearch({ value, onChange, help }) {
  return <div className="field"><label htmlFor="location">Onde você está?</label><input id="location" name="location" value={value} onChange={event => onChange(event.target.value)} placeholder="Digite seu CEP ou bairro" inputMode="text" autoComplete="postal-code" /><p className="field-help">{help || 'Exemplos: 04120-020 ou Vila Mariana.'}</p></div>
}
