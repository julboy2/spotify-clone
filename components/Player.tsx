'use client'

import useGetSongById from '@/hooks/useGetSongById'
import UseLoadSongUrl from '@/hooks/useLoadSongUrl'
import usePlayer from '@/hooks/usePlayer'

export default function Player() {
  const player = usePlayer()
  const { song } = useGetSongById(player.activeId)

  const songUrl = UseLoadSongUrl(song!)

  if (!song || !songUrl || !player.activeId) {
    return null
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      Player
    </div>
  )
}
