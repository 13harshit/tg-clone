
$sourceDir = "C:\Users\harsh\Downloads\pj-pharma-main\GJ Product-20260113T094014Z-1-001\GJ Product"
$targetDir = "C:\Users\harsh\Downloads\pj-pharma-main\public\images\products\showcase"
$logFile = "C:\Users\harsh\Downloads\pj-pharma-main\copy_log.txt"

Write-Output "Starting Copy..." | Out-File -FilePath $logFile -Encoding utf8

if (!(Test-Path $sourceDir)) {
    Write-Output "Source dir not found!" | Out-File -FilePath $logFile -Append -Encoding utf8
    exit 1
}

$files = Get-ChildItem -Path $sourceDir -File | Where-Object { $_.Extension -match "\.(png|jpg|jpeg)" } | Sort-Object Name

$i = 1
foreach ($file in $files) {
    $ext = $file.Extension
    $targetName = "product-$i$ext"
    $targetPath = Join-Path $targetDir $targetName
    
    Copy-Item -Path $file.FullName -Destination $targetPath -Force
    
    Write-Output "$targetName|$($file.Name)" | Out-File -FilePath $logFile -Append -Encoding utf8
    $i++
}

Write-Output "Done. Copied $($i-1) files." | Out-File -FilePath $logFile -Append -Encoding utf8
