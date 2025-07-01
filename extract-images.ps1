$htmlContent = Get-Content -Path "D:\Work\DRM\vnls2\VNSH Laser Strike Training System.html" -Raw
$pattern = 'src="([^"]+)"'
$matches = [regex]::Matches($htmlContent, $pattern)
$imagePaths = $matches | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$imagePaths | ForEach-Object { Write-Output $_ }
