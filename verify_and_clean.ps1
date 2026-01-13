git status | Out-File -Encoding utf8 status_check.txt
git log origin/main..HEAD | Out-File -Encoding utf8 log_check.txt
Remove-Item debug_net.ps1, debug_push.ps1, fix_net.ps1, git_config.txt, nslookup.txt, git_remote.txt, env_vars.txt, push_output.txt, dns_flush.txt, push_final.txt, status_check.txt, log_check.txt
