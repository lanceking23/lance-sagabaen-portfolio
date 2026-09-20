"""Refresh the browser previews and accessible transcript after replacing the PDF.

Optional authoring dependencies: pypdfium2, pdfplumber and Pillow.
The normal Node build and GitHub deployment do not need Python.
"""
from pathlib import Path
import json
import pdfplumber
import pypdfium2

project_root = Path(__file__).resolve().parents[1]
asset_directory = project_root / 'public' / 'assets'
resume_path = asset_directory / 'lance-sagabaen-resume.pdf'
page_previews = []

with pypdfium2.PdfDocument(str(resume_path)) as resume:
    for page_index in range(len(resume)):
        page = resume[page_index]
        preview = page.render(scale=2).to_pil().convert('RGB')
        filename = f'resume-page-{page_index + 1}.webp'
        preview.save(asset_directory / filename, format='WEBP', lossless=True, method=6)
        page_previews.append({
            'src': f'/assets/{filename}',
            'width': preview.width,
            'height': preview.height,
            'page': page_index + 1,
        })
        page.close()

with pdfplumber.open(resume_path) as resume:
    transcript = [page.extract_text() or '' for page in resume.pages]

source = (
    'export const resumePages = ' + json.dumps(page_previews, indent=2) + ';\n'
    'export const resumeText = ' + json.dumps(transcript, ensure_ascii=False, indent=2) + ';\n'
)
(project_root / 'src' / 'resume-content.mjs').write_text(source, encoding='utf-8')
print(f'Updated {len(page_previews)} resume previews and the text transcript.')
