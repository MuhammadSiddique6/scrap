import { companyInfo } from '../data/company'

export default function GoogleMap() {
  return (
    <div className="card">
      <h4 className="font-semibold">Find Our Office</h4>
      <p className="mt-2">{companyInfo.address}</p>
      <div className="mt-4">
        <iframe title="office-location" src={companyInfo.googleMapsEmbedUrl} width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" />
      </div>
      <div className="mt-4">
        <a className="border px-3 py-2 rounded" href={companyInfo.googleMapsUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
      </div>
    </div>
  )
}
