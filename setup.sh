mongo eventsapp --eval "db.dropDatabase()" 
mongo import -d eventsapp -c events --file sampledata/export_events.json
