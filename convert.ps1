param(
    [string]$inPath,
    [string]$outPath
)
try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc = $word.Documents.Open($inPath)
    $doc.SaveAs([ref]$outPath, [ref]17) # 17 is wdFormatPDF
    $doc.Close()
    $word.Quit()
    Write-Host "Success"
} catch {
    Write-Host "Failed: $_"
    if ($word) { $word.Quit() }
}
