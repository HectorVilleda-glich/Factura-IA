export type InvoiceRecognition = {
  fecha: string;
  proveedor: string;
  monto: string;
  categoria_sugerida: string;
};

export async function recognizeInvoice(
  imageBuffer: Buffer,
  categorias: { nombre: string }[]
): Promise<InvoiceRecognition> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY no configurada");
  }

  const categoriasList = categorias.map((c) => c.nombre).join(", ");
  const base64 = imageBuffer.toString("base64");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-haiku-20240307",
      max_tokens: 500,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: "image/jpeg",
                data: base64,
              },
            },
            {
              type: "text",
              text: `Analiza esta imagen de factura y extrae la siguiente información en formato JSON:
- fecha (formato YYYY-MM-DD)
- proveedor (nombre del proveedor o empresa)
- monto (monto total, solo número, sin símbolos ni comas)
- categoria_sugerida (elige UNA de estas categorías: ${categoriasList})

Devuelve SOLO el JSON, sin markdown, sin bloques de código, sin texto adicional.`,
            },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  const textResponse = data?.content?.[0]?.text;

  if (!textResponse) {
    throw new Error("No se pudo obtener respuesta de Anthropic");
  }

  const cleaned = textResponse
    .replace(/```(?:json)?\s*/gi, "")
    .replace(/```/g, "")
    .trim();

  const parsed: Record<string, string> = JSON.parse(cleaned);

  return {
    fecha: parsed.fecha || "",
    proveedor: parsed.proveedor || "",
    monto: parsed.monto || "",
    categoria_sugerida: parsed.categoria_sugerida || "",
  };
}
