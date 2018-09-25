function Check-Website {
  <#
  .SYNOPSIS
  Scans for various security headers

  .DESCRIPTION
  Scans for presence of security headers for the site supplied to the Cmdlet.

  .PARAMETER address
  The website address to check

  .EXAMPLE
  CheckWebsite 'https://news.ycombinator.com'
  #>
  [CmdletBinding()]
  Param(
    [string]$Address
  )
  $res = Invoke-WebRequest -Uri $Address
  $csp = $res.Headers.ContainsKey("Content-Security-Policy")
  $sts = $res.Headers.ContainsKey("Strict-Transport-Security")
  $xframe = $res.Headers.ContainsKey("X-Frame-Options")
  $ref = $res.Headers.ContainsKey("Referrer-Policy")
  $xss = $res.Headers.ContainsKey("X-Xss-Protection")
  Write-Output " - $Address has CSP? $csp"
  Write-Output " - $Address has HSTS? $sts"
  Write-Output " - $Address has X-XSS-Protection? $xss"
  Write-Output " - $Address has Referrer-Policy? $ref"
  Write-Output " - $Address has X-Frame-Options? $xframe"
}
